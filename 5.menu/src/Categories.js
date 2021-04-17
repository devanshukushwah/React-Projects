import React from "react";
import "./Categories.css";

function Categories({ filterItems, allCategories }) {
  return (
    <div className="btn-container">
      {allCategories.map((categories, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItems(`${categories}`)}
          >
            {categories}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
