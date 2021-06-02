import React, { useState } from "react";

function Profile({ todo }) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="profile-container">
      <p>{todo.text}</p>
      <p className="priorityCounter">{count}</p>
      <button onClick={increment}>Priority</button>
    </div>
  );
}

export default Profile;
