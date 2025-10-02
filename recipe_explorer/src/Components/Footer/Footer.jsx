import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer({ transparent }) {
  return (
    <footer className={`footer${transparent ? " footer--light" : ""}`}>
      <p>&copy; Rio Morales</p>
    </footer>
  );
}

export default Footer;
