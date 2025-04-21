import { useEffect, useState } from 'react';
import { Todo } from '../types/Todo';
import { getTodos } from '../api/getTodos';

export default function useTodos(id: number) {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        getTodos(id)
            .then((todos) => {
                setTodoList(todos);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });
    }, []);
    return { todoList, isLoading, error };
}
