import React, { useState } from "react";
import "./Tour.css";

function Tour({ login, avatar_url, removeTour, id }) {
  const [readmore, setReadmore] = useState(false);
  const info =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic ab nihil? Quo nostrum nulla culpa modi aperiam earum voluptatibus provident. Veritatis, quo. Ipsum ab autem amet natus fuga asperiores beatae porro odit est architecto, eius quae nisi, distinctio dolorem?";
  return (
    <>
      <div className="person">
        <img src={avatar_url} />
        <div className="content">
          <h4>{login}</h4>
          <p>
            {readmore ? info : `${info.substring(0, 200)}....`}
            <button className="readmore" onClick={() => setReadmore(!readmore)}>
              {readmore ? "Show Less" : "Show More"}
            </button>
          </p>
          <button className="not-interested" onClick={() => removeTour(id)}>
            NOT INTERESTED
          </button>
        </div>
      </div>
    </>
  );
}

export default Tour;
