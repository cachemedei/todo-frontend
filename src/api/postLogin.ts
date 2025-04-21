import { paste } from '@testing-library/user-event/dist/paste';
import { LoginDetails } from '../types/Login';

export default async function postLogin(details: LoginDetails) {
    const url = 'http://localhost:6213/api/register/login';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: details.email,
            password: details.password
        }),
    });

    if (!response.ok) {
        const fallbackError = 'Error logging in';

        let data;
        try {
            data = await response.json();
        } catch {
            throw new Error(fallbackError);
        }

        const errorMsg = data?.detail ?? fallbackError;
        throw new Error(errorMsg);
    }
    return await response.json();
}
