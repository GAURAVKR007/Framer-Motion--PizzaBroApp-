import './App.css';
import {Routes, Route, useLocation} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';
import React,{ useState ,useEffect} from 'react';
import Page404 from './components/Page404';
import ProtectedRoutes from './components/ProtectedRoutes';
import { wait } from '@testing-library/user-event/dist/utils';


function App() {

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('myData');
    return storedData ? JSON.parse(storedData) : { base: '', Toppings: [], isGood: false };
  });

  const HandleGood = (good) => {
    setData((prev) => {
      return {
        ...prev,
        isGood : good
      }
    })
  }

  const location = useLocation()

  useEffect(()=> {
    if(location.pathname === "/"){
      HandleGood(false)
      console.log("Location",location.pathname);
    }
  },[location.pathname])
  
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

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait">
    <Routes location={location} key={location.key}>
      <Route path='/' element={<Home />}/>
      <Route path='/base' element={<Base good={HandleGood} addBase={setBase}/>}/>

      <Route element={<ProtectedRoutes data={data}/>}>
      <Route path='/toppings' element={<Toppings addTopings={setToppings}/>}/>
      <Route path='/order' element={<Order data={data}/>}/>
      </Route>

      <Route path='*' element={<Page404 />}/>
    </Routes>
    </AnimatePresence>
    </div>
  );
}

export default App;
