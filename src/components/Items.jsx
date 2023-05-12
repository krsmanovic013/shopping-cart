import Item from "./Item";

const Items = ({ data, addToCart }) => {
  return (
    <section>
      {data.map((a) => (
        <Item key={a.id} item={a} addToCart={addToCart} />
      ))}
    </section>
  );
};
export default Items;
