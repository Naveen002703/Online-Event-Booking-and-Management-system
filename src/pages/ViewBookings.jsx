import React, { useEffect, useState } from "react";
import "../styles/ViewBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div className="my-bookings-page">
      <h2>📄 My Event Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking, index) => (
          <div className="booking-card" key={index}>

            {/* Event Image */}
            <img
              src={booking.image}
              alt={booking.title}
              className="booking-image"
            />

            <div className="booking-details">
              <h3>{booking.title}</h3>

              <p><b>Name:</b> {booking.name}</p>
              <p><b>Email:</b> {booking.email}</p>
              <p><b>Tickets:</b> {booking.quantity}</p>
              <p><b>Date:</b> {booking.date || "Not Available"}</p>
              <p className="total"><b>Total:</b> ₹{booking.total}</p>

              <div className="booking-actions">
                <button className="download-btn">⬇ Download PDF</button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;
