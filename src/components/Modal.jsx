import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function Modal({data,setModal}) {
  return (
    <AnimatePresence mode="wait">
        { data.showModal && (
            <motion.div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.5)",
                zIndex: "1"
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >

                <div style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    marginTop: "30vh"
                }}>

                <motion.div style={{
                    width: "auto",
                    height: "40vh",
                    padding: "100px 120px",
                    background: "white",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    boxShadow: "10px 10px 22px -5px rgba(176,0,244,1);",
                    textAlign: "center"
                }}
                initial={{y: "-100vh"}}
                animate={{y: "0"}}
                transition={{type: "spring",stiffness: 70,delay: 0.4}}

                exit={{
                    y: "100vh",
                    transition: {
                      ease: "easeInOut"
                    }
                }}
                >
                    <p
                    style={{color: "#444", fontWeight: "bold", fontSize: "2rem"}}
                    >Want to make another pizza?</p>
                    <Link to="/" style={{textDecoration: "none", borderColor: "black"}}>
                        <button
                        style={{
                            padding: "15px 80px",
                            fontSize: "1.4rem",
                            fontWeight: "bold",
                            background: "transparent",
                            color: "#444",
                            borderColor: "#444",
                            marginTop: "30px",
                            border: "2px solid",
                            cursor: "pointer",
                            borderRadius: "50px",
                            textDecoration: "none"
                        }}
                        >
                        Start Again
                        </button>
                    </Link>
                </motion.div>

                </div>

            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Modal