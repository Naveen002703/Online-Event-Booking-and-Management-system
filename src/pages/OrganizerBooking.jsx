import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OrganizerBookings = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  // Mock fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      // Replace with API call: fetch(`/api/events/${id}/bookings`)
      const mockBookings = [
        {
          id: 1,
          name: "Rahul Sharma",
          email: "rahul@example.com",
          phone: "9876543210",
          quantity: 2,
          total: 3000,
          date: "2026-01-15",
        },
        {
          id: 2,
          name: "Anita Desai",
          email: "anita@example.com",
          phone: "9123456780",
          quantity: 1,
          total: 1500,
          date: "2026-01-14",
        },
        {
          id: 3,
          name: "Vikram Singh",
          email: "vikram@example.com",
          phone: "9876543210",
          quantity: 1,
          total: 1500,
          date: "2026-01-13",
        },
        {
          id: 4,
          name: "Priya Kapoor",
          email: "priya@example.com",
          phone: "9876543210",
          quantity: 1,
          total: 1500,
          date: "2026-01-12",
        }
      ];
      setBookings(mockBookings);
    };
    fetchBookings();
  }, [id]);

  const handleDelete = (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      setBookings(bookings.filter((b) => b.id !== bookingId));
      alert("Booking cancelled successfully!");
      // API call to delete booking can go here
    }
  };

  const filteredBookings = bookings.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Event Bookings - Event ID: {id}</h2>

      <div className="mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredBookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Booking Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.quantity}</td>
                <td>₹{booking.total}</td>
                <td>{booking.date}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(booking.id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrganizerBookings;
