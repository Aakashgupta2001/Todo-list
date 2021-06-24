import React, { useState } from "react";

function Profile({ todo ,settodolist , todolist}) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const remove = () =>{
    let newtodo =  todolist.filter(etodo => {
      return etodo.text !== todo.text
    })
    console.log(newtodo)
    settodolist(newtodo)
  }

  return (
    <div className="profile-container">
      <p>{todo.text}</p>
      <p className="priorityCounter">{count}</p>
      <button onClick={increment}>Priority</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}

export default Profile;
