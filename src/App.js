import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';


function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/base' element={<Base />}/>
      <Route path='/toppings' element={<Toppings />}/>
      <Route path='/order' element={<Order />}/>
    </Routes>
    </div>
  );
}

export default App;
