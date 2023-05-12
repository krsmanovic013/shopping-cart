const Navbar = ({ setShow, cart }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Shopping cart
        </span>
        <div className="cart">
          <span onClick={() => setShow(false)}>Cart</span>
          <span> {cart.length}</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
