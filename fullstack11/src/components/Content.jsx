import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Content.css';

function Content() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <div className="card-wrapper">
            <Card className="hoverable-card">
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>
                  2021/2023 Technical Electric Enginarring - Control and Automation Dep. In Middle Technical University
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="card-wrapper">
            <Card className="hoverable-card">
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <Card.Text>
                  Programming (HTML / CSS / Javascript / Node.Js / React / PHP)<br/>Excellent Teamworker, Highly Driven, Love Fast & Efficient Work & Solutions
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
