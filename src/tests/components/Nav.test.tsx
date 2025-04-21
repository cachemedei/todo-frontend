import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import TodoList from '../../pages/TodoList';
import AddNewTodo from '../../pages/AddNewTodo';
import Nav from '../../components/Nav';

jest.mock('../pages/TodoList');
jest.mock('../pages/AddNewTodo');

const ShowPath = () => {
    const location = useLocation();
    return <p data-testid='current-path'>{location.pathname}</p>;
};

describe('Nav test suite', () => {
    it('should confirm the current path is "/"', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<Nav />}>
                        <Route
                            index
                            element={
                                <>
                                    <TodoList />
                                    <ShowPath />
                                </>
                            }
                        />
                        <Route path='add' element={<AddNewTodo />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByTestId('current-path')).toHaveTextContent('/');
    });
});
