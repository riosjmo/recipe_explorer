import "./Landing.css";
import plate from "../../assets/plate.png";

function Landing({ onLoginClick = () => {}, onRegisterClick = () => {} }) {
  return (
    <main className="hero">
      <div className="hero__inner">
        <div className="hero__left">
          <h1 className="hero__title">
            <span className="hero__title-line1">Discover,</span>
            <span className="hero__title-line2"> Cook, Enjoy.</span>
          </h1>
          <p className="hero__sub">
            Log in or Register to unlock endless recipes.
          </p>
          <div className="hero__buttons" role="group" aria-label="Login and Register">
          <button className="hero__login" onClick={onLoginClick}>
            Log in
          </button>
          <button className="hero__register" onClick={onRegisterClick}>
            Register
          </button>
        </div>
        </div>

        <div className="hero__image" aria-hidden="true">
          <img src={plate} alt="plate of food" />
        </div>
      </div>
    </main>
  );
}

export default Landing;
