import { useState } from "react"
const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { text: newTodo.trim(), checked: false }]);
            setNewTodo("");
        }
    };
    const handleDelete = (index) => {
        const newTodo = [...todos];
        newTodo.splice(index, 1)
        setTodos(newTodo);
    }
    const handleToggleTodo = (index) => {
        const newTodo = [...todos];
        newTodo[index].checked = !newTodo[index].checked;
        setTodos(newTodo);
    }
    return (
        <div className="container">
            <h1>To Do List</h1>
            <div className="input-card">
                <input className="todo-input" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button className="add-btn" onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(index)} />
                        <span className="new-todo" style={{ textDecoration: todo.checked ? "line-through" : "none" }}>{todo.text}</span>
                        <button className="del-btn" onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todolist