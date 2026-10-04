import { useState } from "react";
import { Link } from "react-router-dom";
import BotonFavorito from "../BotonFavorito";

const formatearPrecio = (precio) => `AR$ ${precio.toLocaleString("es-AR")}`;

const Item = ({ id, nombre, precio, imagen, categoria, descripcion, stock, detalle }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => { if (contador > 0) setContador(contador - 1); };

  // Vista de detalle (ruta /producto/:id)
  if (detalle) {
    return (
      <div className="detalle-container">
        <Link to="/productos" className="detalle-backLink">
          ← Volver a productos
        </Link>

        <div className="detalle-grid">
          <div className="detalle-imageWrapper">
            <img src={imagen} alt={nombre} className="detalle-image" />
          </div>

          <div className="detalle-infoSection">
            <span className="detalle-categoryTag">{categoria}</span>
            <h1 className="detalle-title">{nombre}</h1>
            <p className="detalle-price">{formatearPrecio(precio)}</p>

            <h3 className="detalle-descriptionTitle">Descripción</h3>
            <p className="detalle-description">{descripcion}</p>
            <p className="detalle-description">Stock disponible: {stock} unidades</p>

            <button className="detalle-buyButton">Agregar al carrito</button>
          </div>
        </div>
      </div>
    );
  }

  // Vista de tarjeta (listado /productos)
  return (
    <article className="item-card">
      <Link to={`/producto/${id}`} className="item-imageLink">
        <img src={imagen} alt={nombre} className="item-image" />
      </Link>

      <Link to={`/producto/${id}`} className="item-titleLink">
        <h2 className="item-title">{nombre}</h2>
      </Link>
      <p className="item-price">{formatearPrecio(precio)}</p>

      <div className="item-actions">
        <BotonFavorito />

        <div className="item-counter">
          <button onClick={decrementar} className="item-counterBtn">-</button>
          <span className="item-countText">{contador}</span>
          <button onClick={incrementar} className="item-counterBtn">+</button>
        </div>
      </div>
    </article>
  );
};

export default Item;
