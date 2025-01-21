import React, { useState } from "react";

// TodoItem-komponenten som hanterar varje uppgift
function TodoItem({ task, toggleDone, deleteTask }) {
  return (
    <li>
      <strong className={task.done ? "done" : ""}>{task.title}</strong>
      <button
        className="move-up-button"
        onClick={() => toggleDone(task.id, task.done)}
      >
        {task.done ? "Undo" : "Done"}
      </button>
      <button className="delete-button " onClick={() => deleteTask(task.id)}>
        🗑
      </button>
    </li>
  );
}

export function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Hantera ändringar i input-fältet
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        title: newTask,
        done: false,
        id: Date.now(),
      };
      setTasks((prevTasks) => [...prevTasks, newTaskObj]);
      setNewTask("");
    } else {
      alert("Wrong input");
    }
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function toggleDone(id, doneStatus) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !doneStatus } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <section className="to-do-list">
      <h1>To-Do-List</h1>
      <section>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task..."
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </section>
      <nav>
        <ol>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              toggleDone={toggleDone}
              deleteTask={deleteTask}
            />
          ))}
        </ol>
      </nav>
    </section>
  );
}
