import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send login request to server here
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="Login-form mt-4">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter Your Username"
          className="mb-3 py-2 px-3 Login-input"
        />

        <br />

        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Your Password"
          className="py-2 px-3  Login-input"
        />

        <br />
        <Button
          className="Login-btn mt-3 px-5"
          variant="secondary"
          size="lg"
          onClick={() => {
            window.location.pathname = '/dashboard';
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
