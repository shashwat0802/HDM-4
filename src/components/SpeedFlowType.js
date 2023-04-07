import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Sidebar from './Sidebar';

function Speedflowtype() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };
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
    <>
      <div>
        <Sidebar/>
        <form onSubmit={handleSubmit}>
          {/* name section */}
          <div>
            <label>
              Name :
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your name"
              />
            </label>
          </div>
          {/* Capacity Section */}
          <div>
            <h5>Capacity</h5>
            {/* Road type Drop down */}
            <label>
              Select an option:
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Road type</option>
                <option value="option1">Two Lane Road</option>
                <option value="option2">Single Lane Road</option>
                <option value="option2">Four Lane Road</option>
                <option value="option3">Intermediate Road</option>
                <option value="option2">Other Configuration</option>
              </select>
            </label>
            {/* Road type Drop Down */}
            <label>
              Ultimate Capacity:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter Your Username"
              />
            </label>
            <label>
              Free Flow:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter Your Username"
              />
            </label>
            <label>
              Nominal Capacity:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter Your Username"
              />
            </label>
            <label>
              Jam Speed at Capacity :
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter Your Username"
              />
            </label>
          </div>
          {/* capacity section ends */}
          {/* Accident Rates */}

          <div>
            <h5>Capacity</h5>
            <label>
              By Component :
              <br />
              <label>
                Fatal:
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Enter Your Username"
                />
              </label>
              <br />
              <label>
                Injury:
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Enter Your Username"
                />
              </label>
              <br />
              <label>
                Damage Only :
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Enter Your Username"
                />
              </label>
            </label>
          </div>

          <br />
          <Button
            onClick={() => {
              window.location.pathname = '/dashboard';
            }}
          >
            OK
          </Button>
          <Button
            onClick={() => {
              window.location.pathname = '/dashboard';
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={() => {
              window.location.pathname = '/dashboard';
            }}
          >
            Defaults
          </Button>
        </form>
      </div>
    </>
  );
}

export default Speedflowtype;
