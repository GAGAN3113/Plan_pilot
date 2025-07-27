// src/components/pages/RoleSelectionPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelectionPage.css';

function RoleSelectionPage() {
  const navigate = useNavigate();

  const handleClick = (role) => {
    // You can store role info in state or context if needed later
    console.log(`Selected Role: ${role}`);
    navigate('/dashboard');
  };

  return (
    <div className="role-container">
      <div className="role-header">
        <img src="/icon.png" alt="Plan Pilot Icon" className="role-icon" />
        <h1>Plan Pilot</h1>
        <div className="role-menu">☰</div>
      </div>

      <div className="role-main">
        <h2>Select Your Role:</h2>
        <div className="role-cards">
          <div className="role-card" onClick={() => handleClick('Personal')}>
            <h3>Personal</h3>
            <p>Manage your personal events and schedule.</p>
          </div>
          <div className="role-card" onClick={() => handleClick('Organization')}>
            <h3>Organization</h3>
            <p>Oversee group or organizational event planning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleSelectionPage;
