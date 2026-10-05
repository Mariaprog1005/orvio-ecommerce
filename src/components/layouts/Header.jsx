import Nav from "./Nav";
import { Link } from "react-router-dom";
import logoOrvio from "../../assets/logo_transparent.png"; // Ajustado al nombre de tu archivo

const Header = () => {
  return (
    <div className="header-headerWrapper">
      <header className="header-headerContainer">
        <div className="header-brandSection">
          <Link to="/" className="header-brandLogo">
            <img src={logoOrvio} alt="Logo de Orbio" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="header-centerSection">
          <Nav />
        </div>
      </header>
    </div>
  );
};

export default Header;