import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isLanding = location.pathname === "/";
  const isHomeOrAbout =
    location.pathname === "/home" || location.pathname === "/about";

  return (
    <header className={"header" + (isHome ? " header--transparent" : "")}>
      <div className="header__inner">
        <h1 className="header__title">
          {isLanding ? (
            <span className="header__link">CHURRO</span>
          ) : (
            <Link className="header__link" to="/home">
              CHURRO
            </Link>
          )}
        </h1>
        {isHomeOrAbout && <Navigation />}
      </div>
    </header>
  );
}

export default Header;
