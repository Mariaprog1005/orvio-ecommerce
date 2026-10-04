import { Link } from "react-router-dom";
import Titulos from "./Titulos";

const Bienvenida = () => {
  
  return (
    <div className="bienvenida-hero">
      <Titulos>
        <h2>Bienvenidos a Orvio</h2>
        <h3>Tecnología que te acompaña todos los días</h3>
      </Titulos>
      <Link to="/productos" className="bienvenida-boton">
        Ver productos
      </Link>
    </div>
  );
};

export default Bienvenida;
