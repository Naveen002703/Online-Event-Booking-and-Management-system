import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import events from "../data/events";
import "../styles/Events.css";

const Events = () => {
  return (
    <Container className="mt-4 events-page">
      <Row xs={1} md={4} className="g-4">
        {events.map((event) => (
          <Col key={event.id}>
            <Card className="event-card h-100">
              <Card.Img
                variant="top"
                src={event.image}
                className="event-img"
              />

              <Card.Body className="event-body">
                <div>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    📅 {event.date} <br />
                    📍 {event.location} <br />
                    💰 ₹{event.price}
                  </Card.Text>
                </div>

                {/* Button always bottom */}
                <Link to={`/ticket/${event.id}`} className="mt-auto">
                  <Button variant="primary" className="w-100">
                    Book Ticket
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
