import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RecipeModal.css";

function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <ModalWithForm
      title={recipe.title}
      onClose={onClose}
      buttonText="Close"
      onSubmit={onClose}
    >
      <div className="recipe-modal__content">
        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-modal__image"
          />
        )}

        {recipe.summary && (
          <p
            className="recipe-modal__text"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          />
        )}

        {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 && (
          <>
            <h3 className="recipe-modal__heading">Ingredients:</h3>
            <ul className="recipe-modal__text">
              {recipe.extendedIngredients.map((ing) => (
                <li key={ing.id}>{ing.original}</li>
              ))}
            </ul>
          </>
        )}

        {recipe.instructions && (
          <>
            <h3 className="recipe-modal__heading">Instructions:</h3>
            <p
              className="recipe-modal__text"
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            />
          </>
        )}
      </div>
    </ModalWithForm>
  );
}

export default RecipeModal;