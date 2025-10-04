import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li className="navigation__log_out"><Link to="/">Log out</Link></li>
                <li className="navigation__about"><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;