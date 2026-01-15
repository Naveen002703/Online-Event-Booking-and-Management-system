import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import BookEvent from "./pages/BookEvent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Organizer from "./pages/Organizer";
import Ticket from "./pages/Ticket";
import ViewBookings from "./pages/ViewBookings";
import EditEvent from "./pages/EditEvent";
import OrganizerBookings from "./pages/OrganizerBooking";
import CreateEvent from "./pages/CreateEvent";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/book/:id" element={<BookEvent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/organizer" element={<Organizer />} />
        <Route path="/book/:id" element={<BookEvent />} />
        <Route path="/ticket/:id" element={<Ticket />} />
        <Route path="/edit-event/:id" element={<EditEvent />} />
        <Route path="/organizer-bookings/:id" element={<OrganizerBookings />} />
        <Route path="/create-event" element={<CreateEvent />} />

        <Route path="/view-bookings" element={<ViewBookings />} />

        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
