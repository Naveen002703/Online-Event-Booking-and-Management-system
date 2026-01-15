import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import events from "../data/events";
import "../styles/Ticket.css";

const Ticket = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
  });

  if (!event) {
    return <h2 className="error-text">❌ Event not found</h2>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalPrice = event.price * form.quantity;

  const handleBooking = () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all details");
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push({
      eventId: event.id,
      title: event.title,
      image: event.image,
      date: event.date,
      location: event.location,
      price: event.price,
      ...form,
      total: totalPrice,
    });

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("🎉 Ticket booked successfully!");
    navigate("/my-bookings");
  };

  return (
    <div className="ticket-page">
      <div className="ticket-card">

        {/* Event Image */}
        <img src={event.image} alt={event.title} className="ticket-image" />

        <h2>{event.title}</h2>
        <p><b>Date:</b> {event.date}</p>
        <p><b>Location:</b> {event.location}</p>
        <p><b>Price per Ticket:</b> ₹{event.price}</p>

        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />

        <input
          type="number"
          name="quantity"
          min="1"
          value={form.quantity}
          onChange={handleChange}
        />

        <h3>Total Amount: ₹{totalPrice}</h3>

        <button onClick={handleBooking}>Confirm Booking</button>
      </div>
    </div>
  );
};

export default Ticket;
