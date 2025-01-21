import React, { useState } from "react";
import { use } from "react";

export function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handeInputChange(event) {
    setNewTask(event.target.value);
    //this function changes the text in the placeholder
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    } else {
      alert("Wrong input");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <section className="to-do-list">
        <h1>To-Do-List</h1>
        <section>
          <input
            type="text"
            value={newTask}
            placeholder="Enter a task..."
            onChange={handeInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </section>
        <nav>
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                <strong className="text">{task}</strong>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  🗑
                </button>
                <button
                  className="move-up-button"
                  onClick={() => moveTaskUp(index)}
                >
                  👆
                </button>
                <button
                  className="move-down-button"
                  onClick={() => moveTaskDown(index)}
                >
                  👇
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </section>
    </>
  );
}
