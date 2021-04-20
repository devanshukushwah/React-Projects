import "./App.css";
import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getlocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getlocalStorage);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "Please Enter the Value", "error");
    } else if (name && isEditing) {
      // handle edit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "List item is edited", "success");
    } else {
      // show alert
      showAlert(true, "Item added to list", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    showAlert(true, "List Cleared", "success");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "item Removed", "success");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <main>
      {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
      <center>
        <h3>Grocery Bud</h3>
      </center>
      <form className="grocery-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. egg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{isEditing ? "EDIT" : "SUBMIT"}</button>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear Item
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
