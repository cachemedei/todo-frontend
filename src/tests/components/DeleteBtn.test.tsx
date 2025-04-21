import { render, screen, fireEvent } from '@testing-library/react';
import * as deleteApi from '../../api/deleteTodo'; //import to spy on function
import DeleteBtn from '../../components/DeleteBtn';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Delete button test suite', () => {
    it('Calls deleteTodo with correct id number', () => {
        //arrange
        const mockDeleteTodo = jest
            .spyOn(deleteApi, 'deleteTodo')
            .mockImplementation(() => Promise.resolve());
        const testId = 5;

        render(
            <MemoryRouter initialEntries={['/']}>
                <DeleteBtn id={5} />
            </MemoryRouter>
        );

        //act
        const button = screen.getByRole('button', { name: /delete/i });
        fireEvent.click(button);

        //assert
        expect(mockDeleteTodo).toHaveBeenCalledWith(testId);

        //clean up
        mockDeleteTodo.mockRestore();
    });

    it("Doesn't call deleteTodo if id is undefined", () => {
        //arrange
        const mockDeleteTodo = jest
            .spyOn(deleteApi, 'deleteTodo')
            .mockImplementation(() => Promise.resolve());

        render(
            <MemoryRouter initialEntries={['/']}>
                <DeleteBtn id={undefined} />
            </MemoryRouter>
        );

        //act
        const button = screen.getByRole('button', { name: /delete/i });
        fireEvent.click(button);

        //assert
        expect(mockDeleteTodo).not.toHaveBeenCalled();

        //clean up
        mockDeleteTodo.mockRestore();
    });
});

//memory router is something that comes from react-router-dom
