import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setToDoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const addHandler = () => {
    if (task === "") {
      alert("Please add some task before add");
    } else {
      if (editIndex !== null) {
        //update
        const updatedList = [...todoList];
        updatedList[editIndex] = task;
        setToDoList([...updatedList]);
        setEditIndex(null);
      } else {
        //add
        setToDoList([...todoList, task]);
      }
      setTask("");
    }
  }
  const deleteHandler = (index) => {
    const updatedList = todoList.filter((d, i) => i !== index);
    setToDoList([...updatedList]);
  }
  const editHandler = (index) => {
    setTask(todoList[index]);
    setEditIndex(index);
  }
  return (
    <div>
      <h1>ToDo List</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}></input>
      <button onClick={addHandler}>{editIndex !== null ? "UPDATE" : "ADD"}</button>
      <br></br>
      {todoList.map((t, index) =>
        <div key={index}>
          <span>{t}</span>
          <button onClick={() => editHandler(index)}>EDIT</button>
          <button onClick={() => deleteHandler(index)}>DELETE</button>
        </div>)}
    </div>
  )
}

export default App