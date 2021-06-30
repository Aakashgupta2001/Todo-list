import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./todo";
import Form from "./form";

function App() {
  const [todoInput, settodoInput] = useState("");
  const [todoList, settodolist] = useState([]);

  ///local storage

  useEffect(() => {
    const savedTodo = localStorage.getItem("todoSave") || [];
    console.log("savedTodo=" + savedTodo);
  }, []);
  console.log(
    "todoList=" +
      todoList.map((todo) => {
        return todo.text;
      })
  );

  useEffect(() => {
    localStorage.setItem("todoSave", todoList);
  });

  ///local storage end

  return (
    <div className="main">
      <Form
        settodo={settodoInput}
        todo={todoInput}
        settodolist={settodolist}
        todolist={todoList}
      />
      <div className="todoList">
        <h1 className="todoHeading">Todo List</h1>
        {todoList.map((currentTodo) => (
          <Todo
            todo={currentTodo}
            todolist={todoList}
            settodolist={settodolist}
          />
        ))}
      </div>
      <h6 className="workInProgress">
        This app is still a work in progress...
      </h6>
    </div>
  );
}

export default App;
