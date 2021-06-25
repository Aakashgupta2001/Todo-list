import React from "react";

function form({ todo, settodo, settodolist, todolist }) {
  const inputnameHandler = (e) => {
    settodo(e.target.value);
  };

  const buttonHandler = (e) => {
    if (todo === "" || todo[0] === " ") {
    } else {
      settodolist([
        ...todolist,
        { text: todo, completed: false, id: Math.random() * 1000 },
      ]);
    }

    settodo("");
  };

  return (
    <div className="Form">
      <span>Task</span>
      <br />
      <input
        onChange={inputnameHandler}
        value={todo}
        type="text"
        placeholder="Task"
      />
      <br />
      <div className="buttonContainer">
        <button onClick={buttonHandler} type="submit">
          submit
        </button>
      </div>
    </div>
  );
}

export default form;
