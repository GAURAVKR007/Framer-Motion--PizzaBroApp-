import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", color: "white", height: "75vh"}}>
        <div style={{lineHeight: "2.2", textAlign: "center"}}>
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
        
    </div>
  )
}

export default Page404