import React from "react";
import "./List.css";
function List({ peoples }) {
  return (
    <>
      <div className="peoples">
        {peoples.map((person) => {
          return (
            <div className="people" key={person.id}>
              <img src={person.image}></img>
              <div>
                <h2>{person.name}</h2>
                <p>{person.age} years</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
