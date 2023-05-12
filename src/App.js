import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Items from "./components/Items";
import { useState } from "react";
import list from "./data";

const App = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState(list);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.indexOf(item) != -1) return;
    setCart([...cart, item]);
  };

  return (
    <>
      <Navbar setShow={setShow} cart={cart} />
      {show ? (
        <Items data={data} addToCart={addToCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </>
  );
};

export default App;
