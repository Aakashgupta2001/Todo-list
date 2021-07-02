import React, { useState , useEffect } from "react";

function Profile({ todo ,settodolist , todolist}) {

  const [count, setCount] = useState(0);



  //saving priority in local storage
  useEffect(() => {
    localStorage.setItem("todoSave", JSON.stringify(todolist));
    console.log("saved in local storage");
  }, [count]);


  
  const increment = () => {
    setCount(count + 1);
    todo.priority++;
    console.log(todo)

  };
  const remove = () =>{
    let newtodo =  todolist.filter(etodo => {
      return etodo.text !== todo.text
    })
    settodolist(newtodo)
  }

  return (
    <div className="profile-container">
      <p>{todo.text}</p>
      <p className="priorityCounter">{todo.priority}</p>
      <button onClick={increment}>Priority</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}

export default Profile;
