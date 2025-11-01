import { Todo } from '../types'; // Adjust the import path as necessary
import { fetchClient } from '../../../shared/lib/fetchClient';

const API_URL = '/api/todos';

export const getTodos = async (): Promise<Todo[]> => {
    const response = await fetchClient.get(API_URL);
    return response.data;
};

export const addTodo = async (todo: Todo): Promise<Todo> => {
    const response = await fetchClient.post(API_URL, todo);
    return response.data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
    const response = await fetchClient.put(`${API_URL}/${todo.id}`, todo);
    return response.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
    await fetchClient.delete(`${API_URL}/${id}`);
};