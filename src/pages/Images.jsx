import React from "react";

const Images = ({ text }) => {
  return (
    <img
      src={text}
      alt=""
      style={{
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        filter: "brightness(70%)",
        display: "block"
      }}
    />
  );
};

export default Images;
