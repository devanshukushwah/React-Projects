import React, { useEffect } from "react";
import "./App.css";
function Alert({ type, msg, showAlert, list }) {
  useEffect(() => {
    let timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div className="alert-container">
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  );
}

export default Alert;
