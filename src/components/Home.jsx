import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        style={{
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}

        initial={{opacity: 0,scale: 0 }}
        animate={{opacity: 1, scale: 1}}
        transition={{ type: "spring", delay: 0.05, stiffness: 50}}
        
      >
        <motion.h1
          style={{
            margin: "20px",
            fontSize: "4rem",
            marginBottom: "40px",
            color: "white",
          }}
        >
          Welcome to Pizza Bro
        </motion.h1>
        <Link to="/base"
          style={{
            textDecoration: "none",
          }}
        >
          <motion.button 
          style={{
            padding: "20px 80px",
            fontSize: "1.7rem",
            fontWeight: "bold",
            background: "transparent",
            color: "white",
            border: "2px solid white",
            borderRadius: "50px",
            cursor: "pointer"
          }}

          whileHover={{
            scale: 1.1,
            // textShadow: "0px 0px 8px rgb(255,255,255)",
            // boxShadow: "0px 0px 8px rgb(255,255,255)",
            
          }}
          >
          Create Your Pizza
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
}

export default Home;
