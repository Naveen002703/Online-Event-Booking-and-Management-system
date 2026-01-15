import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <Card className="event-card h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={event.image}
        className="event-img"
      />
      

      <Card.Body className="d-flex flex-column">
        <Card.Title>{event.title}</Card.Title>

        <p>📍 {event.location}</p>
        <p>📅 {event.date}</p>
        <p>💰 ₹{event.price}</p>

        <Button
          className="mt-auto"
          onClick={() => navigate(`/book/${event.id}`)}
        >
          Book Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
