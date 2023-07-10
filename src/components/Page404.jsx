import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Page404() {

  return (
    <motion.div style={{display: "flex", justifyContent: "center", alignItems: "center", color: "white", height: "75vh"}}
    initial={{height: 0}}
    animate={{height: "75vh"}}
    transition={{type: "tween", duration: 0.25}}
    >
        <div style={{lineHeight: "2.2", textAlign: "center"}}
        >
            <h1 style={{fontSize: "50px"}}>PAGE 404 ERROR [Page not Found]</h1>
            <Link to="/"
            style={{
                padding: "15px 80px",
                fontSize: "2.1rem",
                fontWeight: "bold",
                background: "transparent",
                color: "white",
                border: "2px solid white",
                borderRadius: "50px",
                textDecoration: "none"
              }}
            >
                Home
            </Link>
        </div>
        
    </motion.div>
  )
}

export default Page404