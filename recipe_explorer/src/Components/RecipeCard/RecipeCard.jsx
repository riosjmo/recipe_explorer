import "./RecipeCard.css";

function RecipeCard({ recipe = {}, onView = () => {} }) {
  const { title = "Untitled", image } = recipe;

  return (
    <div className="recipe-card">
      <div className="recipe-card__media">
        <img
          src={image || "https://placehold.co/300x200"}
          alt={title}
          className="recipe-card__image"
        />
      </div>
      <div className="recipe-card__content">
        <h3 className="recipe-card__title">{title}</h3>
        <button className="recipe-card__button" onClick={() => onView(recipe)}>
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
