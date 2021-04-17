import React from "react";
import "./Tours.css";
import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <main>
      <div className="container">
        <article className="title">
          <h1>Our Tours</h1>
        </article>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </main>
  );
}

export default Tours;
