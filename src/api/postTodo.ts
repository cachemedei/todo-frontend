export async function postTodo(title: string, description: string) {
    const token = window.localStorage.getItem('token');
    const url = 'http://localhost:6213/api/todo';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            description: description,
            isCompleted: false,
            accountId: 3,
        }),
    });
    if (!response.ok) {
        const fallbackError = 'Error posting todo';

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMsg = data?.detail ?? fallbackError;
        throw new Error(errorMsg);
    }
}
