import React, { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";

function Base({addBase}) {


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
      <li
        style={{ listStyle: "none", fontSize: "30px", cursor: "pointer" }}
        className={selected[idx] ? "bold" : ""}
        onClick={() => onClick(idx)}
      >
        {selected[idx] ? ">" : ""} {item}
      </li>
    );
  };

  const mapping = () => {
    return bases.map((item, idx) => (
      <ListItem key={idx} idx={idx} onClick={handleClick} item={item} />
    ));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "75vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
        }}
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
                padding: "15px 80px",
                fontSize: "2.1rem",
                fontWeight: "bold",
                background: "transparent",
                color: "white",
                border: "2px solid white",
                borderRadius: "50px",
                textDecoration: "none"
              }}
              onClick={handleChange}
            >
              Next
            </Link>
          </div>
        }
        </div>
        </div>
        </div>
        
      </div>

      
    </>
  );
}

export default Base;
