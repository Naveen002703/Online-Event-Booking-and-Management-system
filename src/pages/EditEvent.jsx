import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    price: "",
  });

  const [loading, setLoading] = useState(true);

  // Mock fetch event function
  useEffect(() => {
    // Replace this with API call: fetch(`/api/events/${id}`)
    const fetchEvent = async () => {
      // Simulate API delay
      const mockEvent = {
        title: "Music Concert",
        date: "2026-02-20",
        location: "Mumbai",
        description: "An amazing musical evening",
        price: 1500,
      };
      setEventData(mockEvent);
      setLoading(false);
    };
    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to update event: PUT `/api/events/${id}`, eventData
    console.log("Updated Event Data:", eventData);
    alert("Event updated successfully!");
    navigate("/events"); // Navigate back to events list
  };

  if (loading) return <p>Loading event details...</p>;

  return (
    <div className="container mt-4">
      <h2>Edit Event - ID: {id}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ticket Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Save Changes
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/events")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
