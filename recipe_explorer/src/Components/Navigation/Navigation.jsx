import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Log out</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;