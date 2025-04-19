import { postTodo } from '../api/postTodo';

//mock global fetch api
global.fetch = jest.fn();

describe('post todo api call', () => {
    const errorMsg = 'Something went wrong'
    const title = 'test todo'
    const description = 'test test'

    afterEach(() => {
        jest.clearAllMocks(); //clear mock calls to avoid leaks
    });

//success
    it('successfully posts a todo item', async () => {
        const mockResponse = { ok: true, json: () => Promise.resolve({}) }; //simulating successful response
        (fetch as jest.Mock).mockResolvedValue(mockResponse);

        await expect(postTodo(title, description)).resolves.not.toThrow();

        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:6213/api/todo',
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    description,
                    isCompleted: false,
                }),
            })
        );
    });

//response not ok
    it('throws an error when the response is not ok', async () => {
        const mockErrorResponse = {
            ok: false,
            json: () => Promise.resolve({ detail: errorMsg }),
        };
        (fetch as jest.Mock).mockResolvedValue(mockErrorResponse);

        await expect(postTodo(title, description)).rejects.toThrow(
            'Something went wrong'
        );

        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:6213/api/todo',
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    description,
                    isCompleted: false,
                }),
            })
        );
    });

//fallback error
    it('throws a fallback error when the response json is invalid', async () => {
        const mockErrorResponse = {
            ok: false,
            json: () => Promise.reject(),
        };
        (fetch as jest.Mock).mockResolvedValue(mockErrorResponse);

        await expect(postTodo(title, description)).rejects.toThrow(
            'Error posting todo'
        );
    });
});
