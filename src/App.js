import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import React,{ useState ,useEffect} from 'react';
import Page404 from './components/Page404';


function App() {

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('myData');
    return storedData ? JSON.parse(storedData) : { base: '', Toppings: [] };
  });

  const setBase = (base) => {
    setData((prev) => {
      return {
        ...prev,
        base: base
      }
    })
    
  }

  console.log("DAta",data);

  const setToppings = (toppings) => {
    setData((prev) => {
      return {
        ...prev,
        Toppings: toppings
      }
    })
  }

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/base' element={<Base addBase={setBase}/>}/>
      <Route path='/toppings' element={<Toppings addTopings={setToppings}/>}/>
      <Route path='/order' element={<Order data={data}/>}/>
      <Route path='*' element={<Page404 />}/>
    </Routes>
    </div>
  );
}

export default App;
