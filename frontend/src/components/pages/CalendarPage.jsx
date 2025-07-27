// src/components/pages/CalendarPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CalendarPage.css';

function CalendarPage() {
  const [selectedMonth, setSelectedMonth] = useState('July');
  const [selectedYear, setSelectedYear] = useState(2025);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

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

  const handlePrevMonth = () => {
    setSelectedMonth('June');
  };

  const handleNextMonth = () => {
    setSelectedMonth('August');
  };

  const handleFilterClick = (filterType) => {
    alert(`Filter clicked: ${filterType}`);
  };

  // Helper to match date with events
  const getEventsForDate = (date) => {
    return events.filter((event) => parseInt(event.date.split("-")[2]) === date);
  };

  return (
    <div className="calendar-container">
      <nav className="calendar-header">
        <div className="header-left">
          <img src="/icon.png" alt="Plan Pilot" className="calendar-logo" />
          <h1>Plan Pilot</h1>
        </div>
        <div className="header-menu">☰</div>
      </nav>

      <div className="calendar-body">
        <aside className="calendar-sidebar">
          <button className="filter-label">FILTERS ▾</button>
          <button onClick={() => handleFilterClick('Category')}>Category</button>
          <button onClick={() => handleFilterClick('Date')}>Date</button>
          <button onClick={() => handleFilterClick('Time')}>Time</button>
          <button onClick={() => handleFilterClick('Location')}>Location</button>
          <button onClick={() => navigate('/dashboard')}>← Dashboard</button>
        </aside>

        <main className="calendar-main">
          <div className="calendar-title-bar">
            <button onClick={handlePrevMonth}>◀</button>
            <span>{selectedMonth}</span>
            <button onClick={handleNextMonth}>▶</button>
            <span className="calendar-year">{selectedYear}</span>
          </div>

          <div className="calendar-grid">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div className="calendar-day" key={day}>{day}</div>
            ))}

            {Array.from({ length: 42 }).map((_, index) => {
              const date = index < 31 ? index + 1 : "";
              const eventList = getEventsForDate(date);

              return (
                <div className="calendar-cell" key={index}>
                  <span>{date}</span>
                  {eventList.map((event) => (
                    <div className="event-badge" key={event._id}>{event.title}</div>
                  ))}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CalendarPage;
