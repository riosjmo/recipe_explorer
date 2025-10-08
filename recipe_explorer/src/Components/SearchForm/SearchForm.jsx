import React from 'react';
import './SearchForm.css';

function SearchForm({ query = '', onQueryChange = () => {}, onSearch = () => {} }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                className="search-form__input"
                type="text"
                placeholder="Search recipes..."
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
            />
            <button className="search-form__button" type="submit">Search</button>
        </form>
    );
}

export default SearchForm;