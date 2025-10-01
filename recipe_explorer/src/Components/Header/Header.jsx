import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <header className={"header" + (isHome ? " header--transparent" : "")}>
      <div className="header__inner">
        <h1 className="header__title">
          <Link className="header__link" to="/">
            CHURRO
          </Link>
          {/* // change to /home after */}
        </h1>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;
