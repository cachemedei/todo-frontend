import { render, screen, fireEvent } from '@testing-library/react';
import * as deleteApi from '../api/deleteTodo'; //import to spy on function
import DeleteBtn from '../components/DeleteBtn';

describe('Delete button test suite', () => {
    it('Calls deleteTodo with correct id number', () => {
        //arrange
        const mockDeleteTodo = jest
            .spyOn(deleteApi, 'deleteTodo')
            .mockImplementation(() => Promise.resolve());
        const testId = 5;

        render(<DeleteBtn id={5} />);

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

        render(<DeleteBtn id={undefined} />);

        //act
        const button = screen.getByRole('button', { name: /delete/i });
        fireEvent.click(button);

        //assert
        expect(mockDeleteTodo).not.toHaveBeenCalled();

        //clean up
        mockDeleteTodo.mockRestore();
    });
});
