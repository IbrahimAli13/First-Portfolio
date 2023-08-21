import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import './JustforFun.css';

function JustforFun() {
  const [show, setShow] = useState(false);

  return (
    <div className="toast-wrapper">
      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide bg="Dark">
            <Toast.Header closeButton={true}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Me</strong>
              <small>23 Years ago</small>
            </Toast.Header>
            <Toast.Body>A Programmer Has Spawned!</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>Guess My Age</Button>
        </Col>
      </Row>
    </div>
  );
}

export default JustforFun;
