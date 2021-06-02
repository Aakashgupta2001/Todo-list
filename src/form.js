import React from "react";

function form({ todo, settodo, settodolist, todolist }) {
  const inputnameHandler = (e) => {
    settodo(e.target.value);
    console.log(e.target.value);
  };

  const buttonHandler = (e) => {
    if (todo === "" || todo[0] === " ") {
    } else {
      settodolist([
        ...todolist,
        { text: todo, completed: false, id: Math.random() * 1000 },
      ]);
    }

    console.log(todolist);

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

      <button onClick={buttonHandler} type="submit">
        submit
      </button>
    </div>
  );
}

export default form;
