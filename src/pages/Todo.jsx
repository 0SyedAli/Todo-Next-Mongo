import { useState } from "react";
import styles from "../pages/Todo.module.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <div className={styles.todo}>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            
          <input type="text" value={inputValue} onChange={handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
