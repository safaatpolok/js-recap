import React, { useState } from "react";

function TodoList() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Task যোগ করার ফাংশন
  const addTask = () => {
    if (taskInput.trim() === "") {
      alert("add something");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskInput
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  // Task মুছে ফেলার ফাংশন
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Enter key এ Task যোগ করা
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>My ToDo List</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          id="taskInput"
          placeholder="add new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            padding: "8px",
            marginRight: "10px",
            width: "300px",
            fontSize: "16px"
          }}
        />
        <button
          id="addBtn"
          onClick={addTask}
          style={{
            padding: "8px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: "0" }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              padding: "10px",
              backgroundColor: "#f0f0f0",
              marginBottom: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>{task.text}</span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "3px"
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
