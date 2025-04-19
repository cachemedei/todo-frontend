import { useEffect, useState } from 'react';
import { Todo } from '../types/Todo';
import { getTodos } from '../api/getTodos';

export default function useTodos() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        getTodos()
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
