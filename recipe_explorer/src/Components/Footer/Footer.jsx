import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    const isHome = location.pathname === '/home';

    return (
        <footer className={"footer" + (isHome ? ' footer--light' : '')}>
            <p>&copy; Rio Morales</p>
        </footer>
    );
}

export default Footer;