import "./App.css";
import React, { useState, useEffect } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (amount > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <div className="title">
        <h2>Lorem-ipsum generator!</h2>
      </div>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraph: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <input id="submit" type="submit" value="Generate" />
      </form>
      <article className="lorem-text">
        {text.map((singleText, index) => {
          return <p key={index}>{singleText}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
