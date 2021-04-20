import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
function List({ items, removeItem, editItem }) {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        return (
          <article key={item.id}>
            <p>{item.title}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={() => editItem(item.id)}>
                <FaEdit />
              </button>
              <button className="trash-btn" onClick={() => removeItem(item.id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
