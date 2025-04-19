import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as todoListHook from '../hooks/useTodoList';
import TodoList from '../pages/TodoList';
import { Todo } from '../types/Todo';

//mock hook
jest.mock('../hooks/useTodoList');

describe('TodoList test suite', () => {
    it('renders the loading state', () => {
        //@ts-ignore
        todoListHook.default.mockReturnValue({ isLoading: true, todoList: [] });

        render(<TodoList />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
    it('renders todos once loaded', () => {
        const mockTodos: Todo[] = [
            { id: 1, title: 'test1', description: 'First task' },
            { id: 2, title: 'test2', description: 'Second task' },
        ];

        //@ts-ignore
        todoListHook.default.mockReturnValue({
            isLoading: false,
            todoList: mockTodos,
        });

        render(<TodoList />);
        expect(screen.getByText(/test1/i)).toBeInTheDocument();
        expect(screen.getByText(/test2/i)).toBeInTheDocument();
    });
});
