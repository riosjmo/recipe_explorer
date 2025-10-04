import { fetchJson } from "./api";

const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

export function searchRecipes(query) {
  const url = `${BASE_URL}?query=${encodeURIComponent(query)}&number=20&apiKey=${API_KEY}`;
  // return promise chain that ends with catch in fetchJson
  return fetchJson(url).then((data) => data.results);
}

export function getRecipeById(id) {
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
  return fetchJson(url);
}
