import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const parentVariants = {
    hidden: {
        opacity: 0,
        x: "100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4,
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};


function Order({data,setModal}) {

    useEffect(()=>{
        setTimeout(()=>{
            setModal(true)
        },5000)
    },[])

    const lists = () => {
      return data.Toppings.map(item => {
            return (
                <li style={{listStyle: "none", textAlign: "center",fontSize: "1.9rem"}}>{item}</li>
            )
        })
    }

  return (
  <>
    <motion.div style={{color: "white",textAlign: "center",lineHeight: "1.7",display: 'flex',flexDirection: "column", height: "75vh", justifyContent: "center", alignItems: "center"}}
    variants={parentVariants}
    initial="hidden"
    animate="visible"
    >
        <div
        >
            <h2 style={{fontSize: "3rem"}}>Thank You for Your order :)</h2>
            <hr style={{marginBottom: "10px"}}/>
            <motion.h4 style={{fontSize: "2rem"}} variants={childVariants}>You ordered a {data.base} Pizza with :</motion.h4>
            <motion.div style={{textAlign: "start",}} variants={childVariants}>
                {lists()}
            </motion.div>
        </div>
    </motion.div>
  </>
  )
}

export default Order