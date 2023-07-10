import React, { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden : {
    x: "100vw",
    opacity : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring", 
      stiffness: 70,
      delay: 0.1
    }
  }
}

const nextButtonVariants = {
  hidden : {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {type: "spring", stiffness: 100}
  }
}

function Base({addBase,good}) {

  // const containerVariants = {
  //   hidden : {
  //     x: "100vw",
  //     opacity : 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0
  //   }
  // }

  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const [selected, setSelected] = useState({
    0: false,
    1: false,
    2: false,
  });

  const check = () => {
    const selectedValues = Object.values(selected);
  
    for (let x = 0; x < selectedValues.length; x++) {
      if (selectedValues[x] === true) {
        return true;
      }
    }
    return false;
  };

  const handleChange = () => {
    const selectedValues = Object.values(selected);
  
    for (let x = 0; x < selectedValues.length; x++) {
      if (selectedValues[x] === true) {
        addBase(bases[x]);
        good(true);
        return true;
      }
    }
  }
  

  const handleClick = (idx) => {
    if (selected[idx] == true) {
      setSelected({
        0: false,
        1: false,
        2: false,
      });
      return;
    }

    setSelected({
      0: false,
      1: false,
      2: false,
    });

    setSelected((prev) => {
      return {
        ...prev,
        [idx]: true,
      };
    });
  };

  const ListItem = ({ item, onClick, idx }) => {
    return (
      <motion.li
        style={{ listStyle: "none", fontSize: "27px", cursor: "pointer" }}
        className={selected[idx] ? "bold" : ""}
        onClick={() => onClick(idx)}

        whileHover={{scale:1.3, originX: 0, color: "#f8e112"}}
        transition={{type: "spring",stiffness: 300}}
      >
        {selected[idx] ? ">" : ""} {item}
      </motion.li>
    );
  };

  const mapping = () => {
    return bases.map((item, idx) => (
      <ListItem key={idx} idx={idx} onClick={handleClick} item={item} />
    ));
  };

  return (
    <>
      <motion.div
        style={{
          display: "flex",
          height: "75vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
        }}

        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
        <div>
          <h2 style={{ fontSize: "35px", width: "400px", }}>
            Step 1: Choose Your Base
          </h2>
          <hr style={{ marginBottom: "20px", marginTop: "10px" }} />
        </div>

        <div style={{ width: "400px", lineHeight: "1.7", position: "relative" }}>{mapping()}
        <div style={{position: "absolute" ,bottom: "-100px" , left: "-10px"}}>
        {  check() &&
          <div style={{ width: "400px",marginTop: "25px", }}>
            <Link to="/toppings"
              style={{
                textDecoration: "none"
              }}
              onClick={handleChange}
            >
              <motion.button
              style={{
                padding: "15px 80px",
                fontSize: "1.4rem",
                fontWeight: "bold",
                background: "transparent",
                color: "white",
                border: "2px solid white",
                borderRadius: "50px",
                cursor: "pointer",
                textDecoration: "none"
              }}

              variants={nextButtonVariants}
              whileHover={{scale: 1.1}}
              >
              Next
              </motion.button>
            </Link>
          </div>
        }
        </div>
        </div>
        </div>
        
      </motion.div>

      
    </>
  );
}

export default Base;
