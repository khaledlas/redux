import { Checkbox } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../features/todoSlice";
import EditTache from "./EditTache";
import "./Tache.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Tache = ({ text, done, id }) => {
  const dispatch = useDispatch();
  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <div className="tache">
      <Checkbox onClick={() => dispatch(completeTask(id))} />
      <span className={done ? "tache--done" : " "}>{text}</span>

      <EditTache id={id} text={text} done={done} />

      <DeleteIcon
        className="icon_hover"
        onClick={() => {
          removeTask();
        }}
      ></DeleteIcon>
      <span>{new Date().toLocaleString() + ""}</span>
    </div>
  );
};

export default Tache;
