import Item from "./Item";
const ItemList = ({ productos }) => {
  return (
    <div className="itemlist-grid">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;