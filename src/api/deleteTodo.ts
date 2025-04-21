export async function deleteTodo(id: number) {

    if(typeof id !== 'number' || isNaN(id)) {
        throw new Error('Invalid ID passed to delete')
    }
    
    const url = `http://localhost:6213/api/todo/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const fallbackError = 'Error deleting todo';

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMsg = data?.detail ?? fallbackError;
        throw new Error(errorMsg);
    }
}
