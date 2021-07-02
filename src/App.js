import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./todo";
import Form from "./form";

function App() {
  const [todoInput, settodoInput] = useState("");
  const [todoList, settodolist] = useState([]);

  ///local storage

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todoSave")) || [];
    console.log("savedTodo=" + savedTodo + "with type " + typeof savedTodo);
    console.log(savedTodo.map((todo) => todo));
    settodolist(savedTodo.map((todo) => todo));
  }, []);

  useEffect(() => {
    localStorage.setItem("todoSave", JSON.stringify(todoList));
    console.log("saved in local storage");
  }, [todoList]);

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
            key={currentTodo.id}
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
