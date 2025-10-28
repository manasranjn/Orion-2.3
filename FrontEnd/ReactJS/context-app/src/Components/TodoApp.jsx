import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);

  const handleAddTask = () => {
    if (!task.trim()) return;
    if (editId) {
      setTodos(
        todos.map((t) =>
          t.id === editId ? { ...t, text: task, time: new Date() } : t
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: task,
        completed: false,
        time: new Date(),
      };
      setTodos([newTodo, ...todos]);
    }
    setTask("");
  };

  const handleDelete = (id) => setTodos(todos.filter((t) => t.id !== id));

  const handleEdit = (id) => {
    const todo = todos.find((t) => t.id === id);
    setTask(todo.text);
    setEditId(id);
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const filteredTodos =
    filter === "All"
      ? todos
      : filter === "Completed"
      ? todos.filter((t) => t.completed)
      : todos.filter((t) => !t.completed);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f7f7ff] py-10">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">TODO LIST</h1>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleAddTask}
          className="bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition"
        >
          {editId ? "Update Task" : "Add Task"}
        </button>

        <select
          className="px-4 py-2 rounded-md bg-gray-300 text-gray-700 outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-80 mb-8 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <div className="w-[90%] max-w-2xl bg-white shadow-md rounded-xl p-4">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-gray-500 py-6">No tasks added yet</p>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-4 rounded-lg mb-3"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  className="w-5 h-5 accent-indigo-500"
                />
                <div>
                  <p
                    className={`text-lg ${
                      todo.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.text}
                  </p>
                  <p className="text-xs text-gray-500">
                    {todo.time.toLocaleTimeString()}{" "}
                    {todo.time.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  <FaTrash className="text-gray-600" />
                </button>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  <FaEdit className="text-gray-600" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoApp;
