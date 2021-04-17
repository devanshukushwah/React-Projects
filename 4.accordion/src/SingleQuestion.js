import React, { useState } from "react";
import "./SingleQuestion.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function SingleQuestion({ title, info }) {
  const [showinfo, setshowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setshowInfo(!showinfo)}>
          {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showinfo && info}</p>
    </div>
  );
}

export default SingleQuestion;
