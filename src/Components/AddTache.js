import React, { useState } from "react";
import "./AddTache.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const AddTache = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(saveTodo({ todo: text }));
      setText("");
    } else {
      alert("Veuillez renseigner une tâche !");
    }
  };

  return (
    <div className="ajout_tache">
      <h1>Saisissez vos tâches</h1>
      <form onSubmit={addTodo}>
        <input
          className="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className="button">+</button>
        
      </form>
    </div>
  );
};

export default AddTache;
