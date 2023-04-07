import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Modal, Button } from 'react-bootstrap';

export default function RoadNetwork() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Sidebar />
      <div className="d-flex justify-content-end px-5">
        <button
          type="button"
          className="btn btn-primary align-self-end my-4"
          onClick={handleShow}
        >
          Add Road Network
        </button>
      </div>
      <div
        className="container d-flex align-items-center flex-column"
        style={{ height: '100%' }}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Sections</Modal.Title>
          </Modal.Header>
          <Modal.Body>No Section Added</Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
