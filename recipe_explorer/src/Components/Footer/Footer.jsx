import "./Footer.css";
import { Link } from "react-router-dom";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer({ transparent }) {
  return (
    <footer className={`footer${transparent ? " footer--light" : ""}`}>
      <div className="footer__left">
        <p>&copy; 2025 Churro</p>
      </div>
      <div className="footer__right">
        <Link to="/about" className="footer__about">
          About
        </Link>
        <a
          href="https://github.com/riosjmo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__icon" src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/riotech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__icon" src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
