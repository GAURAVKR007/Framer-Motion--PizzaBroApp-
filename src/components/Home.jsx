import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        style={{
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: "20px",
            fontSize: "4rem",
            marginBottom: "40px",
            color: "white",
          }}
        >
          Welcome to Pizza Bro
        </h1>
        <Link to="/base"
          style={{
            padding: "20px 80px",
            fontSize: "1.7rem",
            fontWeight: "bold",
            background: "transparent",
            color: "white",
            border: "2px solid white",
            textDecoration: "none",
            borderRadius: "50px",
          }}
        >
          Create Your Pizza
        </Link>
      </div>
    </>
  );
}

export default Home;
