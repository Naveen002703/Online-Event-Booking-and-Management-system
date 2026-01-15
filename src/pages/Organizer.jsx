import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrganizerDashboard.css";

const OrganizerDashboard = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Music Concert",
      location: "Bangalore",
      date: "2026-02-10",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      id: 2,
      title: "Tech Conference",
      location: "Hyderabad",
      date: "2026-03-05",
      image:
        "https://quixy.com/wp-content/uploads/2021/04/IDC-Directions.jpg",
    },
    {
      id: 3,
      title: "Food Festival",
      location: "Mumbai",
      date: "2026-02-16",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      id: 4,
      title: "Art Exhibition",
      location: "Bangalore",
      date: "2026-04-15",
      image:
        "https://mydesignangel.in/cdn/shop/articles/exhibition_banner_1.jpg?v=1706516835",
    },
    {
      id: 5,
      title: "Dance Workshop",
      location: "Delhi",
      date: "2026-05-10",
      image:
        "https://www.thedanceworx.com/images/dance-courses/beginners.png",
    },
    {
      id: 6,
      title: "Literature Festival",
      location: "Kolkata",
      date: "2026-06-20",
      image:
        "https://assets.cntraveller.in/photos/6586b6074481ec51e3424575/16:9/w_1024%2Cc_limit/2AP16AB.jpg",
    },
  ]);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) &&
      (city === "" ||
        event.location.toLowerCase() === city.toLowerCase())
  );

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="container my-4">
      <h2>Organizer Dashboard</h2>
      <p className="text-muted">Create and manage your events</p>

      <button
        className="btn btn-primary mb-4"
        onClick={() => navigate("/create-event")}
      >
        + Create New Event
      </button>

      {/* Stats */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="stat-card">
            <h5>Total Events</h5>
            <h2>{events.length}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-card">
            <h5>Total Bookings</h5>
            <h2>120</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-card">
            <h5>Revenue</h5>
            <h2>₹45,000</h2>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">All Cities</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Surat">Surat</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Kanpur">Kanpur</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Indore">Indore</option>
            <option value="Thane">Thane</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Visakhapatnam">Visakhapatnam</option>
            <option value="Patna">Patna</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Ludhiana">Ludhiana</option>
          </select>
        </div>
      </div>

      <h4 className="mb-3">My Events</h4>

      {/* Events */}
      <div className="row">
        {filteredEvents.length === 0 && (
          <p className="text-muted">No events found.</p>
        )}

        {filteredEvents.map((event) => {
          const isUpcoming = new Date(event.date) >= new Date();

          return (
            <div className="col-md-4 mb-4" key={event.id}>
              <div className="card event-card shadow-sm">
                <img
                  src={event.image}
                  className="card-img-top"
                  alt={event.title}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    {event.title}
                    <span
                      className={`badge ms-2 ${
                        isUpcoming ? "bg-success" : "bg-secondary"
                      }`}
                    >
                      {isUpcoming ? "Upcoming" : "Past"}
                    </span>
                  </h5>

                  <p className="mb-1">📍 {event.location}</p>
                  <p>📅 {event.date}</p>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        navigate(`/edit-event/${event.id}`)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete?"
                          )
                        ) {
                          handleDelete(event.id);
                        }
                      }}
                    >
                      Delete
                    </button>

                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        navigate(
                          `/organizer-bookings/${event.id}`
                        )
                      }
                    >
                      View Bookings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrganizerDashboard;
