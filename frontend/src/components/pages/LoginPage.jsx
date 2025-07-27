import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert(data.message || 'Login failed.');
    }
  };

  return (
    <div className="login-page">
      <nav className="navbar">
        <div className="nav-left">
          <img src="/icon.png" alt="Plan Pilot" className="logo" />
        </div>
        <div className="nav-center">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Product</a>
          <a href="#">Resources</a>
          <a href="#">Help</a>
        </div>
        <div className="nav-right">
          <a href="/login">Login</a>
          <button onClick={() => navigate('/signup')}>Get Started</button>
        </div>
      </nav>

      <div className="login-content">
        <div className="login-form-box">
          <img src="/icon.png" alt="Plan Pilot" className="form-icon" />
          <h1>Plan Pilot</h1>
          <h2>LOGIN TO YOUR ACCOUNT</h2>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="login-links">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">Login</button>

            <p className="signup-text">
              DON’T HAVE AN ACCOUNT?{' '}
              <span onClick={() => navigate('/signup')}>SIGN UP</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
