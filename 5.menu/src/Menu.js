import React from "react";
import "./Menu.css";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, price, desc } = item;

        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <span>${price}</span>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
