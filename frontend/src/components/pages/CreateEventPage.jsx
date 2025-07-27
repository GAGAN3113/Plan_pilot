// src/components/pages/CreateEventPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEventPage.css';

function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/events/create', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // optional
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert("Event created!");
        navigate('/dashboard');
      } else {
        alert(data.message || "Event creation failed");
      }
    } catch (err) {
      alert("Error creating event");
    }
  };

  return (
    <div className="create-event-page">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" required onChange={handleChange} />
        <input type="date" name="date" required onChange={handleChange} />
        <input type="time" name="time" required onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" required onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateEventPage;
