import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [peoples, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{peoples.length} birthday today</h3>
        <List peoples={peoples} />
        <button className="btn" onClick={() => setPeople([])}>
          CLEAR ALL
        </button>
      </section>
    </main>
  );
}

export default App;
