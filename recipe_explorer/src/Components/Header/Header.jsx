import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isAbout = location.pathname === "/about";
  const isHomeOrAbout = isHome || isAbout;

  let logoLink = null;

  if (isLoggedIn) {
    logoLink = "/home";
  } else if (isAbout) {
    logoLink = "/";
  }

  return (
    <header className={"header" + (isHome ? " header--transparent" : "")}>
      <div className="header__inner">
        <h1 className="header__title">
          {logoLink ? (
            <Link className="header__link" to={logoLink}>
              CHURRO
            </Link>
          ) : (
            <span className="header__link">CHURRO</span>
          )}
        </h1>
        {isLoggedIn && isHomeOrAbout && (
          <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </header>
  );
}

export default Header;
