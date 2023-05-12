const Item = ({ item, addToCart }) => {
  const { id, title, img, author, price, amount } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt={title} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>{price}</p>
        <button onClick={() => addToCart(item)}>Add to cart</button>
      </div>
    </div>
  );
};
export default Item;
