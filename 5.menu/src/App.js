import React, { useState } from "react";
import "./App.css";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h3>Our Menu</h3>
          <div className="line"></div>
        </div>
        <Categories filterItems={filterItems} allCategories={allCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
