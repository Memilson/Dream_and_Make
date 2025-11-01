import React from 'react';
import { Todo } from '../../types'; // Adjust the import path based on your types location
import './TodoList.css'; // Optional: Import CSS for styling

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                    <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;