import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Item from "./Item";

const ItemListContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}datos/productos.json`)
      .then(res => {
        if (!res.ok) throw new Error("No se pudo cargar productos");
        return res.json();
      })
      .then(datos => setProductos(datos))
      .catch(err => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando)
    return <div className="listcont-statusMessage">Cargando productos...</div>;

  if (error)
    return <div className="listcont-statusMessage">Error: {error}</div>;

  // /producto/:id -> detalle de un solo producto
  if (id) {
    const producto = productos.find((p) => p.id === Number(id));
    if (!producto)
      return <div className="listcont-statusMessage">Producto no encontrado</div>;
    return <Item {...producto} detalle />;
  }

  // /productos -> listado
  return (
    <section className="listcont-container">
      <h1>Productos</h1>
      <ItemList productos={productos} />
    </section>
  );
};

export default ItemListContainer;
