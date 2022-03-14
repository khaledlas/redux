import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tache from "./Tache";
import "./ListeTaches.css";

const ListeTaches = () => {
  const todos = useSelector((state) => state.todos);
  const [status, setStatus] = useState("all");
  const [style, setStyle] = useState("buttonn");
  // const changeStyle = () => {
  //   setStyle((style) => (style === "buttonn" ? "buttonn2" : "buttonn"));
  // };

  return (
    <div>
      <div className="boutons-filtres">
        <button className="buttonn" onClick={() => setStatus("all")}>
          Toutes les tâches
        </button>

        <button
          className={style}
          onClick={() => {
            setStatus("actives");
          }}
        >
          Tâches actives
        </button>
        <button className="buttonn" onClick={() => setStatus("done")}>
          Tâches effectuées
        </button>
      </div>

      {status == "done"
        ? todos
            .filter((todo) => todo.done == true)
            .map((todo) => (
              <Tache
                key={todo.id}
                text={todo.text}
                id={todo.id}
                done={todo.done}
              />
            ))
        : status == "actives"
        ? todos
            .filter((todo) => todo.done == false)
            .map((todo) => (
              <Tache
                key={todo.id}
                text={todo.text}
                id={todo.id}
                done={todo.done}
              />
            ))
        : todos.map((todo) => (
            <Tache
              key={todo.id}
              text={todo.text}
              id={todo.id}
              done={todo.done}
            />
          ))}
    </div>
  );
};

export default ListeTaches;
