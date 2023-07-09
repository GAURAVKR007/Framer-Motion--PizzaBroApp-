import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Base />
      <Toppings />
      <Order />
    </div>
  );
}

export default App;
