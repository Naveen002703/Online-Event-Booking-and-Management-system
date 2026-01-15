import React from "react";
import HomePageImages from "./HomePageImages";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="home-hero">
        <Container className="text-center">
          <h1 className="home-title">Online Event Booking System✨✨🍾</h1>
          
          <p className="home-subtitle">Check the updates for the events</p>
        </Container>
      </div>

      <HomePageImages />
    </>
  );
};

export default Home;
