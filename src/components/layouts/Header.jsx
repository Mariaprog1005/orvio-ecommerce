import Nav from "./Nav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-headerWrapper">
      <header className="header-headerContainer">
        <div className="header-brandSection">
          <Link to="/" className="header-brandLogo">
            Orvio
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