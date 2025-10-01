import './Main.css';
import plate from '../../assets/plate.png';

function Main({ onLoginClick = () => {}, onRegisterClick = () => {} }) {
  // This component currently serves as the public landing / hero for not-logged-in users.
  // The `onLoginClick` prop is a callback that should open your login modal when implemented.

  return (
    <main className="hero">
      <div className="hero__inner">
        <div className="hero__left">

          <h1 className="hero__title">
            <span className="hero__title-line1">Discover. Cook.</span>
            <span className="hero__title-line2">Enjoy.</span>
          </h1>
          <p className="hero__sub">Log in or Register to unlock endless recipes.</p>

          <button className="hero__login" onClick={onLoginClick}>Log in</button>
          <button className="hero__register" onClick={onRegisterClick}>Register</button>
        </div>

        <div className="hero__image" aria-hidden="true">
          <img src={plate} alt="plate of food" />
        </div>
      </div>
    </main>
  );
}

export default Main;
