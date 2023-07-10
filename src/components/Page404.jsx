import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition : {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.27,
    }
  }
}

function Page404() {

  return (
    <motion.div style={{display: "flex", justifyContent: "center", alignItems: "center", color: "white", height: "75vh"}}
    initial={{y: "-100vh"}}
    animate={{y: 0}}
    transition={{type: "spring", stiffness: 70}}

    exit={{
      y: "100vh",
      transition: {
        ease: "easeInOut"
      }
    }}
    >
        <div style={{lineHeight: "2.2", textAlign: "center"}}
        >
            <h1 style={{fontSize: "50px"}}>PAGE 404 ERROR [Page not Found]</h1>
            <Link to="/"
            style={{
                textDecoration: "none"
              }}
            >

              <motion.button
              style={{
              padding: "15px 80px",
              fontSize: "2.1rem",
              fontWeight: "bold",
              background: "transparent",
              color: "white",
              border: "2px solid white",
              cursor: "pointer",
              borderRadius: "50px",}}

                variants={buttonVariants}
                whileHover="hover"
              >
                Home
              </motion.button>
            </Link>
        </div>
        
    </motion.div>
  )
}

export default Page404