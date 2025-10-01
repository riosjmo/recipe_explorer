import './Main.css';

function Main({ onLoginClick = () => {} }) {
  // This component currently serves as the public landing / hero for not-logged-in users.
  // The `onLoginClick` prop is a callback that should open your login modal when implemented.

  return (
    <main className="hero">
      <div className="hero__inner">
        <div className="hero__left">

          <h1 className="hero__title">Enjoy breakfast with us</h1>
          <p className="hero__sub">Start your day in the best possible way.</p>

          <button className="hero__login" onClick={onLoginClick}>Log in</button>
        </div>

        <div className="hero__image" aria-hidden="true">
          <img src="/hero-food.png" alt="" />
        </div>
      </div>
    </main>
  );
}

export default Main;
