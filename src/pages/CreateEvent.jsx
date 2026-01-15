import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrganizerDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // Fetch events from localStorage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Organizer Dashboard</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/create-event")}
      >
        Create New Event
      </button>

      {events.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        <div className="row">
          {events.map((event) => (
            <div className="col-md-4 mb-3" key={event.id}>
              <div className="card shadow-sm">
                <img
                  src={event.image}
                  className="card-img-top"
                  alt={event.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">
                    {event.location} <br />
                    Date: {event.date} <br />
                    Price: ₹{event.price}
                  </p>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => navigate(`/edit-event/${event.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => navigate(`/organizer-bookings/${event.id}`)}
                  >
                    Bookings
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrganizerDashboard;
