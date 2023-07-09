import React,{useState} from 'react'
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
      return toppings.map((item, idx) => (
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
              Step 2: Choose Toppings
            </h2>
            <hr style={{ marginBottom: "20px", marginTop: "10px" }} />
          </div>
  
          <div style={{ width: "400px", lineHeight: "1.7", position: "relative" }}>{mapping()}
          <div style={{position: "absolute" ,bottom: "-100px" , left: "-10px"}}>
          {  check() &&
            <div style={{ width: "400px",marginTop: "25px", }} onClick={handleChange}>
              <Link to="/order"
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
                Order
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

export default Toppings