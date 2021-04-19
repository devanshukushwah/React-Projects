import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaMapPin, FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number < 0) return people.length - 1;
    if (number > people.length - 1) return 0;
    return number;
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(checkNumber(index + 1));
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <main>
      <div className="title">
        <h2>/ Reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = people[index];
          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={`person ${position}`}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <h3>{title}</h3>
              <p>{quote}</p>
            </article>
          );
        })}
        <button className="button-container">
          <button onClick={() => setIndex(checkNumber(index - 1))}>
            <FiChevronLeft />
          </button>
          <button onClick={() => setIndex(checkNumber(index + 1))}>
            <FiChevronRight />
          </button>
        </button>
      </div>
    </main>
  );
}

export default App;
