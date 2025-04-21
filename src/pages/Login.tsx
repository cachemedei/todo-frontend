import { useState } from 'react';
import { LoginDetails } from '../types/Login';
import postLogin from '../api/postLogin';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    const { setAuth } = useAuth();

    const [details, setDetails] = useState<LoginDetails>({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await postLogin(details);
        window.localStorage.setItem('token', response.token);
        window.localStorage.setItem('firstName', response.firstName);
        window.localStorage.setItem('userId', response.accountId);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col font-heading tracking-widest text-xl h-[300px] justify-evenly'
        >
            <label htmlFor='email'>Email</label>
            <input
                className='p-3 rounded w-64'
                type='email'
                name='email'
                id='email'
                onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
            <input
                className='p-3 rounded w-64'
                type='password'
                name='password'
                id='password'
                onChange={handleChange}
            />
            <button type='submit'>log in</button>
        </form>
    );
}
