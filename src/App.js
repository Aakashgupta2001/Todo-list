import React, { useState } from "react";
import "./App.css";
import Todo from "./todo";
import Form from "./form";

function App() {
  const [todoInput, settodoInput] = useState("");
  const [todoList, settodolist] = useState([]);

  let cookies_data = JSON.stringify(localStorage.getItem("storedTodo"));
  if (cookies_data !== "") {
    let todoData = cookies_data.split(",");
    console.log(todoData);
  }

  if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log("local storage supported");
    localStorage.setItem(
      "storedTodo",
      todoList.map((todo) => {
        return todo.text;
      })
    );

    console.log(cookies_data);
  } else {
    console.log("local storage not supported");
  }

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
