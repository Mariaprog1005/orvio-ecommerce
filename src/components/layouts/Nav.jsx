import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="nav-navContainer">
      <ul className="nav-navList">
        <li>
          <Link to="/" className="nav-navLink">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/productos" className="nav-navLink">
            Productos
          </Link>
        </li>
        <li>
          <Link to="/carrito" className="nav-navLink">
            Carrito
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;