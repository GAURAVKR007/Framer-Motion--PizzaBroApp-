import React,{useState} from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Toppings({addTopings}) {

    const toppings = ["mushrooms","peppers","onions","olivers","extra chesse", " tomatoes"];

    const [selected, setSelected] = useState({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
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
        const toppingArr = [];

        const selectedValues = Object.values(selected);
      
        for (let x = 0; x < selectedValues.length; x++) {
          if (selectedValues[x] === true) {
            toppingArr.push(toppings[x]);
          }
        }

        addTopings(toppingArr)

    }
    

    
  
    const handleClick = (idx) => {
        
      if (selected[idx] == true) {
        setSelected((prev)=> {
            return {
                ...prev,
                [idx] : false
            }
        });
        return;
      }
  
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

          whileHover={{scale: 1.3,originX: 0, color:"#f8e112"}}
          transition={{type: "spring", stiffness: 300}}
        >
          {selected[idx] ? ">" : ""} {item}
        </motion.li>
      );
    };
  
    const mapping = () => {
      return toppings.map((item, idx) => (
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

          initial={{x: "100vw", opacity: 0}}
          animate= {{x: 0, opacity: 1}}
          transition={{type: "spring", delay: 0.1, stiffness: 70}}
        >
          <div>
          <div>
            <h2 style={{ fontSize: "35px", width: "400px", }}>
              Step 2: Choose Toppings
            </h2>
            <hr style={{ marginBottom: "20px", marginTop: "10px" }} />
          </div>
  
          <div style={{ width: "400px", lineHeight: "1.7", position: "relative" }}>{mapping()}
          <div style={{position: "absolute" ,bottom: "-100px" , left: "-10px"}}>
          {  check() &&
            <div style={{ width: "400px",marginTop: "25px", }}>
              <Link to="/order"
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
                  cursor: "pointer",
                  borderRadius: "50px",
                  textDecoration: "none"
                }}

              animate={{x: 0}}
              initial={{x: "-100vw"}}
              transition={{type: "spring", stiffness: 100}}
              whileHover={{scale: 1.1}}
                >
                Order
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

export default Toppings