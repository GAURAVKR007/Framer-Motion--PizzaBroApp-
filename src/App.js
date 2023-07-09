import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import React,{ useState } from 'react';


function App() {

  const [data, setData] = useState({
    base: "",
    Toppings: [],
  })

  const setBase = (base) => {
    setData((prev) => {
      return {
        ...prev,
        base: base
      }
    })
  }

  const setToppings = (toppings) => {
    setData((prev) => {
      return {
        ...prev,
        Toppings: toppings
      }
    })
  }

  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/base' element={<Base addBase={setBase}/>}/>
      <Route path='/toppings' element={<Toppings addTopings={setToppings}/>}/>
      <Route path='/order' element={<Order data={data}/>}/>
    </Routes>
    </div>
  );
}

export default App;
