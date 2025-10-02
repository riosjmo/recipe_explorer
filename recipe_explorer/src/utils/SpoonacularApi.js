const BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://api.spoonacular.com/recipes/complexSearch"
    : "https://api.spoonacular.com/recipes/complexSearch";

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

export async function searchRecipes(query) {
  console.log("Loaded API key:", API_KEY);
  try {
    const response = await fetch(
      `${BASE_URL}?query=${encodeURIComponent(
        query
      )}&number=20&apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results; // Spoonacular returns results[]
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getRecipeById(id) {
  const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data; // full recipe info
  } catch (err) {
    console.error(err);
    throw err;
  }
}
