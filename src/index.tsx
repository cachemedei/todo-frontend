import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './pages/TodoList';
import Nav from './components/Nav';
import AddNewTodo from './pages/AddNewTodo';
import EditTodo from './pages/EditTodo';
import Login from './pages/Login';
import { AuthContext, AuthProvider } from './context/AuthProvider';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Nav />,
        children: [
            { path: '/', element: <TodoList /> },
            { path: '/add', element: <AddNewTodo /> },
            { path: '/edit/:id', element: <EditTodo /> },
            { path: '/login', element: <Login /> },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
