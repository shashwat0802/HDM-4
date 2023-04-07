import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Speedflowtype() {
  const [username, setUsername] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send login request to server here
  };

  return (
    <>
      <div className="Speedflowtype-main mt-3">
        <form onSubmit={handleSubmit} >
          {/* name section */}
          <div>
            <label>
              Name :
              <input
                className="mx-2 my-1 "
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
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="mx-2 my-1"
              >
                <option value="">Road type</option>
                <option value="option1">Two Lane Road</option>
                <option value="option2">Single Lane Road</option>
                <option value="option2">Four Lane Road</option>
                <option value="option3">Intermediate Road</option>
                <option value="option2">Other Configuration</option>
              </select>
            </label>
            {/* Road type Drop Down */}
            <br />
            <label>
              Ultimate Capacity:
              <input
                type="text"
                placeholder="Enter Your Data"
                className="mx-2 my-1"
              />
            </label>
            <br />
            <label>
              Free Flow:
              <input
                type="text"
                placeholder="Enter Your Data"
                className="mx-2 my-1"
              />
            </label>
            <br />
            <label>
              Nominal Capacity:
              <input
                type="text"
                placeholder="Enter Your Data"
                className="mx-2 my-1"
              />
            </label>
            <br />
            <label>
              Jam Speed at Capacity :
              <input
                type="text"
                placeholder="Enter Your Data"
                className="mx-2 my-1"
              />
            </label>
            <br />
          </div>
          {/* capacity section ends */}
          {/* Accident Rates */}

          <div>
            <h5>Accident Rates(in number per 100 million veh-km)</h5>
            <label>
              By Component :
              <br />
              <label>
                Fatal:
                <input type="text" value={0} className="mx-2 my-1" />
              </label>
              <br />
              <label>
                Injury:
                <input type="text" value={0} className="mx-2 my-1" />
              </label>
              <br />
              <label>
                Damage Only :
                <input type="text" value={0} className="mx-2 my-1" />
              </label>
            </label>
          </div>
          {/* Speeed Related */}
          <div>
            <h5>Speed Related</h5>
            <label>
              maxr:
              <input type="text" value={0.65} className="mx-2 my-1" />
            </label>
            <br />
            <label>
              CALBFAC
              <input type="text" value={1} className="mx-2 my-1" />
            </label>
            <br />
            <label>
              Desired Speed Multiplication Factor
              <input type="text" value={1} className="mx-2 my-1" />
            </label>
          </div>

          <br />
          <Button
            className="mt-2 mb-2"
            onClick={() => {
              window.location.pathname = '/dashboard';
            }}
          >
            OK
          </Button>
          <br />
          <Button
            className="mb-2"
            onClick={() => {
              window.location.pathname = '/dashboard';
            }}
          >
            Cancel
          </Button>
          <br />
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
