import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import events from "../data/events";
import { Button, Card, Container, Alert } from "react-bootstrap";

const BookEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(e => e.id === parseInt(id));

  const handleBooking = () => {
    const newTicket = {
      id: Date.now(),
      title: event.title,
      location: event.location,
      date: event.date,
      price: event.price,
      image: event.image,
      quantity: 1
    };

    const existingTickets =
      JSON.parse(localStorage.getItem("tickets")) || [];

    localStorage.setItem(
      "tickets",
      JSON.stringify([...existingTickets, newTicket])
    );

    // ALSO ADD TO ORGANIZER DASHBOARD
    const organizerEvents =
      JSON.parse(localStorage.getItem("organizerBookings")) || [];

    localStorage.setItem(
      "organizerBookings",
      JSON.stringify([...organizerEvents, newTicket])
    );

    navigate("/ticket");
  };

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Img src={event.image} height="300" style={{ objectFit: "cover" }} />
        <Card.Body>
          <h3>{event.title}</h3>
          <p>📍 {event.location}</p>
          <p>📅 {event.date}</p>
          <p>💰 ₹{event.price}</p>

          <Button onClick={handleBooking}>
            Confirm Booking
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BookEvent;
