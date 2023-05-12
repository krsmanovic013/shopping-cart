import { useState, useEffect } from "react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let sum = 0;
    cart.map((a) => (sum += a.amount * a.price));
    setPrice(sum);
  };
  const handleRemove = (id) => {
    setCart(cart.filter((a) => a.id != id));
    handlePrice();
  };

  const handleChange = (item, val) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += val;
    if (arr[ind].amount <= 1) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <article>
      {cart.map((a) => (
        <div className="cart_box" key={a.id}>
          <div className="cart_img">
            <img src={a.img} alt={a.title} />
            <p>{a.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(a, -1)}>-</button>
            <button>{a.amount}</button>
            <button onClick={() => handleChange(a, 1)}>+</button>
          </div>
          <div>
            <span>${a.price}</span>
            <button onClick={() => handleRemove(a.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price</span>
        <span>${price}</span>
      </div>
    </article>
  );
};
export default Cart;
