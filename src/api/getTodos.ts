export async function getTodos(id: number) {
    const url = `http://localhost:6213/api/todo/${id}`;
    const response = await fetch(url, { method: 'GET' });

    if (!response.ok) {
        const fallbackError = 'Error fetching todo list';

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMsg = data?.detail ?? fallbackError;
        throw new Error(errorMsg);
    }
    return await response.json();
}
