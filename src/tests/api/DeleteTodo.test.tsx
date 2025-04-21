import '@testing-library/jest-dom';
import { deleteTodo } from '../../api/deleteTodo';

global.fetch = jest.fn();

describe('delete todo item test suite', () => {
    const errorMsg = 'Something went wrong';
    const badIdMsg = 'Invalid ID passed to delete';
    const todoId = 2;

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('successfully delete a todo item', async () => {
        const mockReponse = { ok: true, json: () => Promise.resolve({}) };

        (fetch as jest.Mock).mockResolvedValue(mockReponse);

        await expect(deleteTodo(todoId)).resolves.not.toThrow();

        expect(fetch).toHaveBeenCalledWith(
            `http://localhost:6213/api/todo/${todoId}`,
            expect.objectContaining({
                method: 'DELETE',
            })
        );
    });

    it('throws an error when the response is not ok', async () => {
        const mockErrorResponse = {
            ok: false,
            json: () => Promise.resolve({ detail: errorMsg }),
        };

        (fetch as jest.Mock).mockResolvedValue(mockErrorResponse);

        await expect(deleteTodo(todoId)).rejects.toThrow(errorMsg);
    });

    it('throws a fallback error when json response is invalid', async () => {
        const mockErrorResponse = { ok: false, json: () => Promise.reject() };

        (fetch as jest.Mock).mockResolvedValue(mockErrorResponse);

        await expect(deleteTodo(todoId)).rejects.toThrow('Error deleting todo');
    });

    it('throws a type error when called with invalid or no id', async () => {
        //@ts-expect-error: intentionally calling w/o id
        await expect(deleteTodo(undefined)).rejects.toThrow(badIdMsg);
        //@ts-expect-error
        await expect(deleteTodo()).rejects.toThrow(badIdMsg);
        //@ts-expect-error
        await expect(deleteTodo('foo')).rejects.toThrow(badIdMsg);
    });
});
