// src/components/pages/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

function DashboardPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/events", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="dashboard-container">
      <nav className="dashboard-header">
        <div className="header-left">
          <img src="/icon.png" alt="Plan Pilot" className="dashboard-logo" />
          <h1>Plan Pilot</h1>
        </div>
        <div className="header-menu">☰</div>
      </nav>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <button>DASHBOARD</button>
          <button>SEARCH</button>
          <button onClick={() => navigate('/calendar')}>SCHEDULE</button>
          <button>SETTINGS</button>
        </aside>

        <main className="dashboard-main">
          <div className="dashboard-overview">
            <h2>OVERVIEW</h2>
            <button className="new-event-btn" onClick={() => navigate('/create-event')}>New Event</button>
          </div>

          <div className="dashboard-widgets">
            <div className="widget"><h3>Events</h3></div>
            <div className="widget"><h3>Tasks</h3></div>
          </div>

          <div className="upcoming-events">
            <h3>Upcoming Events</h3>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {events.length > 0 ? (
                  events.map((event) => (
                    <tr key={event._id}>
                      <td>{event.title}</td>
                      <td>{event.date}</td>
                      <td>{event.time}</td>
                      <td>{event.location}</td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4">No events yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
