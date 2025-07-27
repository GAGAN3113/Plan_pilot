import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/icon.png" alt="Plan Pilot" />
          <span>Plan Pilot</span>
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Product</a>
          <a href="#">Resources</a>
          <a href="#">Help</a>
        </div>
        <div className="nav-buttons">
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="get-started-btn" onClick={() => navigate('/role')}>Get Started</button>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to <span>Plan Pilot</span></h1>
          <p>Your smart companion for event scheduling and management</p>
          <ul>
            <li>Plan Smarter</li>
            <li>Stay Notified</li>
            <li>Never miss what matters most</li>
          </ul>
          <button className="get-started-btn large" onClick={() => navigate('/role')}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img src="/icon.png" alt="Plan Pilot Icon" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
