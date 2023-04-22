import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

function TrafficFlowPattern() {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [rows, setRows] = useState([
    {
      serialNo: 1,
      description: "Period 1",
      value1: 87.6,
      value2: 0.0,
      value3: 0.0,
    },
    {
      serialNo: 2,
      description: "Period 2",
      value1: 350.4,
      value2: 0.0,
      value3: 0.0,
    },
    {
      serialNo: 3,
      description: "Period 3",
      value1: 613.2,
      value2: 0.0,
      value3: 0.0,
    },
    {
      serialNo: 4,
      description: "Period 4",
      value1: 2978.4,
      value2: 0.0,
      value3: 0.0,
    },
    {
      serialNo: 5,
      description: "Period 5",
      value1: 4730.4,
      value2: 0.0,
      value3: 0.0,
    },
  ]);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (e, index, key) => {
    const updatedRows = [...rows];
    updatedRows[index][key] = e.target.value;
    setRows(updatedRows);
  };

  const addRow = () => {
    const newRow = {
      serialNo: rows.length + 1,
      description: "New Row",
      value1: 0,
      value2: 0,
      value3: 0,
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleCancelClick = () => {
    setName("");
    setSelectedOption("Seasonal");
  };

  const handleDefaultsClick = () => {
    setName("");
    setSelectedOption("Seasonal");
  };

  return (
    <>
      <Sidebar />
      <div className="container mt-5">
        <h1 className="mb-3">Traffic Flow Pattern</h1>
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
          {/* dropdown */}
          <Form.Group controlId="formDropdown">
            <h5 className="mt-2">Road Use</h5>
            <Form.Control
              as="select"
              value={selectedOption}
              // onChange={handleDropdownChange}
            >
              <option>Seasonal</option>
              <option>Commuter</option>
              <option>Inter-Urban</option>
              <option>Other use</option>
            </Form.Control>
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
        <Table responsive bordered className="my-table mt-5">
          <thead>
            <tr>
              <th>Period</th>
              <th>Description</th>
              <th>Hrs per Year (HRYRp)</th>
              <th>Hourly Volume(HVp)</th>
              <th>% of AADT(PCNADTp)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.serialNo}</td>
                <td>
                  <input
                    className="form-control table-input"
                    type="text"
                    value={row.description}
                    onChange={(e) => handleChange(e, index, "description")}
                  />
                </td>
                <td>
                  <input
                    className="form-control table-input"
                    type="number"
                    value={row.value1}
                    onChange={(e) => handleChange(e, index, "value1")}
                  />
                </td>
                <td>
                  <input
                    className="form-control table-input"
                    type="number"
                    value={row.value2}
                    onChange={(e) => handleChange(e, index, "value2")}
                  />
                </td>
                <td>
                  <input
                    className="form-control table-input"
                    type="number"
                    value={row.value3}
                    onChange={(e) => handleChange(e, index, "value3")}
                  />
                </td>
                <td>
                  <Button variant="danger" onClick={() => deleteRow(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="text-center">
          <Button variant="primary" onClick={addRow}>
            Add New
          </Button>
        </div>
      </div>
    </>
  );
}

export default TrafficFlowPattern;
