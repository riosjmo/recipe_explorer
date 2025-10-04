import "./Main.css";
import { useState, useEffect, useRef } from "react";
import SearchForm from "../SearchForm/SearchForm";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeModal from "../RecipeModal/RecipeModal";
import { searchRecipes, getRecipeById } from "../../utils/SpoonacularApi";
import kitchen from "../../assets/kitchen.jpg";
import Preloader from "../Preloader/Preloader";

function Main() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastSearchedAt, setLastSearchedAt] = useState(0);

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewRecipe = async (recipe) => {
    try {
      const fullRecipe = await getRecipeById(recipe.id);
      setSelectedRecipe(fullRecipe);
      setModalOpen(true);
    } catch (err) {
      console.error("Failed to load recipe:", err);
    }
  };

  const handleSearch = async (q) => {
    const term = q || query;
    if (!term) return;
    setLastSearchedAt(Date.now());
    setLoading(true);
    setError(null);
    try {
      const res = await searchRecipes(term);
      setResults(res || []);
      setVisibleCount(3);
    } catch (err) {
      setError(err.message || "Search failed");
    } finally {
      setLoading(false);
    }
  };

  const handleQueryChange = (val) => setQuery(val);

  const hasSearched = results.length > 0 || loading || error;
  const resultsRef = useRef(null);

  useEffect(() => {
    if (!lastSearchedAt) return;
    if (loading) return;

    const el = resultsRef.current;
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top, behavior: "smooth" });
  }, [loading, lastSearchedAt]);

  return (
    <main className="main">
      <section className={`main-hero ${!hasSearched ? "main-hero--full" : ""}`}>
        <div
          className="main-hero__bg"
          role="img"
          aria-label="Kitchen background"
          style={{ backgroundImage: `url(${kitchen})` }}
        />
        <div className="main-hero__inner">
          <h1 className="main-hero__title">What's going on in the kitchen?</h1>
          <p className="main-hero__subtitle">
            Find recipes, save time and start cooking.
          </p>
          <div className="main-hero__search">
            <SearchForm
              query={query}
              onQueryChange={handleQueryChange}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      {hasSearched && (
        <section className="recipes" ref={resultsRef}>
          <div className="recipes__inner">
            <h2 className="recipes__title">Search results</h2>
            <div
              className={`recipes__grid ${results.length > 0 ? "fade-in" : ""}`}
            >
              {loading && <Preloader />}
              {error && <p className="recipes__error">{error}</p>}
              {!loading && !error && results && results.length === 0 && (
                <p className="recipes__error">
                  No results found — try another search.
                </p>
              )}
              {results &&
                results.slice(0, visibleCount).map((r) => (
                  <RecipeCard
                    key={r.id || r.title}
                    recipe={{
                      title: r.title,
                      image: r.image,
                      description: r.summary || r.description,
                      id: r.id,
                    }}
                    onView={handleViewRecipe}
                  />
                ))}
            </div>

            {results.length > visibleCount && (
              <button
                className="show-more-btn"
                onClick={() => setVisibleCount(results.length)}
              >
                Show More
              </button>
            )}
          </div>
        </section>
      )}

      {modalOpen && selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setModalOpen(false)}
        />
      )}
    </main>
  );
}

export default Main;
