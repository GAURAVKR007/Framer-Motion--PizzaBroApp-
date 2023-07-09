import React from "react";

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
        <button
          style={{
            padding: "20px 80px",
            fontSize: "1.4rem",
            fontWeight: "bold",
            background: "transparent",
            color: "white",
            border: "2px solid white",
            borderRadius: "50px",
          }}
        >
          Create Your Pizza
        </button>
      </div>
    </>
  );
}

export default Home;
