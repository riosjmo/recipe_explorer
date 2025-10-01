import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import RecipeCard from "../RecipeCard/RecipeCard";
import kitchen from '../../assets/kitchen.jpg';

function Main() {
  return (
    <main className="main">
      <section className="main-hero">
        <div
          className="main-hero__bg"
          role="img"
          aria-label="Kitchen background"
          style={{ backgroundImage: `url(${kitchen})` }}
        />
        <div
          className="main-hero__bg"
          role="img"
          aria-label="Kitchen background"
        />
        <div className="main-hero__inner">
          <h1 className="main-hero__title">What's going on in the kitchen?</h1>
          <p className="main-hero__subtitle">
            Find recipes, save favorites and start cooking.
          </p>
          <div className="main-hero__search">
            <SearchForm />
          </div>
        </div>
      </section>

      <section className="recipes">
        <div className="recipes__inner">
          <h2 className="recipes__title">Explore Recipes</h2>
          <div className="recipes__grid">
            {[
              { title: 'Classic Pancakes', description: 'Fluffy pancakes for breakfast', image: '' },
              { title: 'Tomato Pasta', description: 'Simple pasta with tomato sauce', image: '' },
              { title: 'Avocado Toast', description: 'Healthy and quick', image: '' },
            ].map((r, i) => (
              <RecipeCard key={i} recipe={r} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
