import React , {useState} from "react";
import "./App.css";
import Profile from "./testHook";
import Form from "./form";

function App() {

  const [todoInput , settodoInput] = useState('');
  const [todoList , settodolist] = useState([])


  return (
    <div className="main">
      <Form settodo = {settodoInput}  todo={todoInput} settodolist = {settodolist} todolist={todoList} />
      <div className="todoList">
      {todoList.map((currentTodo) => (
        <Profile todo = {currentTodo} />
      ))}
      </div>
    </div>
  );
}

export default App;
