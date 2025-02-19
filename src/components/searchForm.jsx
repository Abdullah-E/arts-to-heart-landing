import React, { useState } from "react";
import SearchableDropdown from "./SearchableDropdown";
import "../css/search.css";

const SearchForm = ({ categories, onSearch }) => {
    const [keyword, setKeyword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ keyword, category: selectedCategory });
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
                {/* Keyword Input */}
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        required
                        className="search-input"
                    />
                </div>

                {/* Category Dropdown */}
                <div className="input-group dropdown">
                    <SearchableDropdown
                        options={categories}
                        title="All Categories"
                        searchBy="label"
                        valueField="value"
                        onChange={(selected) => setSelectedCategory(selected.value)}
                        clearable
                    />
                </div>

                {/* Search Button */}
                <div className="input-group">
                    <button type="submit" className="search-button">
                        <i className="search-icon"></i> Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;