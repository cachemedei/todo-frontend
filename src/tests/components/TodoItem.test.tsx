import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Todo } from '../../types/Todo';
import TodoItem from '../../components/TodoItem';
import { MemoryRouter } from 'react-router-dom';

describe('Todo item test suite', () => {
    let mockTodo: Todo;

    it('renders todo item', () => {
        mockTodo = {
            title: 'test',
            description: 'description',
            isCompleted: false,
        };

        render(
            <MemoryRouter>
                <TodoItem todo={mockTodo} />
            </MemoryRouter>
        );

        const checkbox = screen.getByRole('checkbox');

        expect(screen.getByText(/test/i)).toBeInTheDocument();
        expect(screen.getByText(/description/i)).toBeInTheDocument();
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });

    it('checkbox is checked is todo is completed', () => {
        mockTodo = {
            title: 'test',
            description: 'description',
            isCompleted: true,
        };

        render(
            <MemoryRouter>
                <TodoItem todo={mockTodo} />
            </MemoryRouter>
        );

        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).toBeChecked();
    });
});
