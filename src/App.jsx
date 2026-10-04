import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Bienvenida from "./components/Bienvenida";
import ItemListContainer from "./components/products/ItemListContainer";

const Carrito = () => {
  return (
    <section style={{ textAlign: "center" }}>
      <h1>Carrito</h1>
      <p>Tu carrito está vacío. Muy pronto vas a poder sumar productos acá.</p>
      <p style={{ marginTop: "1rem" }}>
        <Link to="/productos" style={{ textDecoration: "underline" }}>Ir a productos</Link>
      </p>
    </section>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Route>
    </Routes>
  );
};

export default App;
