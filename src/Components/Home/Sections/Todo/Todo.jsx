import { TodoContext } from "../../../../Contexts/todoContext";
import "./Todo.scss";
import React, { useContext, useState } from "react";
//component displaying todo list
//using defined functions inside TodoContext

function Todo() {
  const { todos, addTodo, completeTodo, removeTodo } = useContext(TodoContext); //getting functions through context
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    //function for adding new task
    if (newTask.trim() !== "") {
      addTodo(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="todo__container">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} //input control
      />
      <button onClick={handleAddTask} className="btn btn__add">
        Add Task
      </button>
      {todos &&
        todos.map((todo, index) => (
          <div key={index} className="todo__item">
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => completeTodo(index)}
              className="btn btn__complete"
            >
              Complete
            </button>
            <button
              onClick={() => removeTodo(index)}
              className="btn btn__remove"
            >
              Remove
            </button>
          </div>
        ))}
      <p>Total Tasks: {todos && todos.length}</p>
      <p>
        Completed Tasks:{" "}
        {todos && todos.filter((todo) => todo.completed).length}
      </p>
    </div>
  );
}

export default Todo;
