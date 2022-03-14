import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    saveTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.todo,
        done: false,
      };
      state.push(newTodo);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editTask: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    completeTask: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    },
  },
});

export const { saveTodo, deleteTask, editTask, completeTask } =
  todoSlice.actions;

export default todoSlice.reducer;
