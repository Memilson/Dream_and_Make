import { useEffect, useState } from 'react';
import { fetchTodos, createTodo, deleteTodo } from '../services/todoApi';
import { Todo } from '../types';

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const fetchedTodos = await fetchTodos();
                setTodos(fetchedTodos);
            } catch (err) {
                setError('Failed to load todos');
            } finally {
                setLoading(false);
            }
        };

        loadTodos();
    }, []);

    const addTodo = async (newTodo: Omit<Todo, 'id'>) => {
        try {
            const createdTodo = await createTodo(newTodo);
            setTodos((prev) => [...prev, createdTodo]);
        } catch (err) {
            setError('Failed to add todo');
        }
    };

    const removeTodo = async (id: number) => {
        try {
            await deleteTodo(id);
            setTodos((prev) => prev.filter(todo => todo.id !== id));
        } catch (err) {
            setError('Failed to delete todo');
        }
    };

    return { todos, loading, error, addTodo, removeTodo };
};