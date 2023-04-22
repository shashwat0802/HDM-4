import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Sidebar from "./Sidebar";

function Samplespeed() {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [ultimateCapacity, setUltimateCapacity] = useState(600);
  const [freeflow, setFreeflow] = useState(0);
  const [nominalcapacity, setNominalCapacity] = useState(0.7);
  const [JamSpeed, setJamSpeed] = useState(10);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!", name, selectedOption, ultimateCapacity);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);

    // Update ultimate capacity based on selected option
    switch (event.target.value) {
      case "Single Lane Road":
        setUltimateCapacity(600);
        setFreeflow(0);
        setNominalCapacity(0.7);
        setJamSpeed(10);
        break;
      case "Two Lane Road":
        setUltimateCapacity(1400);
        setFreeflow(0.1);
        setNominalCapacity(0.9);
        setJamSpeed(25);
        break;
      case "Four Lane Road":
        setUltimateCapacity(2000);
        setFreeflow(0.4);
        setNominalCapacity(0.95);
        setJamSpeed(40);
        break;
      case "Intermediate Road":
        setUltimateCapacity(1200);
        setFreeflow(0);
        setNominalCapacity(0.7);
        setJamSpeed(20);
        break;
      default:
        setSelectedOption("Single Lane Road");
        setUltimateCapacity(600);
        setFreeflow(0);
        setNominalCapacity(0.7);
        setJamSpeed(10);
        break;
    }
  };

  const handleDefaultsClick = () => {
    setName("");
    setSelectedOption("Single Lane Road");
    setUltimateCapacity(600);
    setFreeflow(0);
    setNominalCapacity(0.7);
    setJamSpeed(10);
  };

  const handleCancelClick = () => {
    setName("");
    setSelectedOption("Single Lane Road");
    setUltimateCapacity(600);
    setFreeflow(0);
    setNominalCapacity(0.7);
    setJamSpeed(10);
  };

  return (
    <>
      <Sidebar />
      <div className="form-container mt-3">
        {" "}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <h5>Name</h5>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formDropdown">
            <h5>Capacity</h5>
            <Form.Label>Dropdown</Form.Label>
            <Form.Control
              as="select"
              value={selectedOption}
              onChange={handleDropdownChange}>
              <option>Single Lane Road</option>
              <option>Two Lane Road</option>
              <option>Four Lane Road</option>
              <option>Intermediate Road</option>
            </Form.Control>
          </Form.Group>
          {/* Ultimate Capacity */}
          <Form.Group controlId="formUltimateCapacity">
            <Form.Label>Ultimate Capacity</Form.Label>
            <Form.Control type="number" value={ultimateCapacity} readOnly />
          </Form.Group>
          {/* freeflow */}
          <Form.Group controlId="formUltimateCapacity">
            <Form.Label>Free-flow</Form.Label>
            <Form.Control type="number" value={freeflow} readOnly />
          </Form.Group>
          {/* Nominal Capacity */}
          <Form.Group controlId="formUltimateCapacity">
            <Form.Label>Nominal Capacity</Form.Label>
            <Form.Control type="number" value={nominalcapacity} readOnly />
          </Form.Group>
          {/* JamSpeed at capacity */}
          <Form.Group controlId="formUltimateCapacity">
            <Form.Label>JamSpeed at capacity (km/h)</Form.Label>
            <Form.Control type="number" value={JamSpeed} readOnly />
          </Form.Group>

          {/* Section-2 */}
          {/* Accident Rates */}
          <Form.Group controlId="formUltimateCapacity">
            <h5>Accident Rates(in number per 100 million veh-km)</h5>
            <Form.Label> Fatal</Form.Label>
            <Form.Control type="number" value={0} readOnly />
          </Form.Group>
          <Form.Group controlId="formUltimateCapacity">
            <Form.Label>Injury</Form.Label>
            <Form.Control type="number" value={0} readOnly />
          </Form.Group>
          <Form.Group controlId="formUltimateCapacity">
            <Form.Label>Damage-only</Form.Label>
            <Form.Control type="number" value={0} readOnly />
          </Form.Group>

          {/* Section-3 */}
          {/* Speed Related */}
          <Form.Group controlId="formUltimateCapacity">
            <h5>Speed-Related</h5>
            <Form.Label> maxr(m/sq.sec)</Form.Label>
            <Form.Control type="number" value={0.6} readOnly />
          </Form.Group>
          <Form.Group controlId="formUltimateCapacity">
            <Form.Label>CALBFAC</Form.Label>
            <Form.Control type="number" value={1} readOnly />
          </Form.Group>
          <Form.Group controlId="formUltimateCapacity">
            <Form.Label> Desired Speed Multiplication Factor</Form.Label>
            <Form.Control type="number" value={1} readOnly />
          </Form.Group>

          {/* Buttons */}
          <Button variant="primary" type="submit" className="mt-2 px-4 mb-2">
            OK
          </Button>

          <Button
            variant="secondary"
            onClick={handleDefaultsClick}
            className="mt-2 mx-2 mb-2">
            Defaults
          </Button>

          <Button
            variant="danger"
            onClick={handleCancelClick}
            className="mt-2 mb-2 ">
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Samplespeed;
