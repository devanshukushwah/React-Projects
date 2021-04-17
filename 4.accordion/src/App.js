import "./App.css";
import data from "./data";
import React from "react";
import SingleQuestion from "./SingleQuestion";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Question and Answers About Login</h3>
        <section className="info">
          {data.map((person) => {
            return <SingleQuestion key={person.id} {...person} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
