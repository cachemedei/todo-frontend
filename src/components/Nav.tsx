import { Link, Outlet } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className='bg-gray-700 min-h-screen pt-20 space-y-16 flex flex-col items-center'>
            <ul className='border-b border-white w-[450px] flex justify-between py-4 px-6 mx-auto font-heading tracking-wide text-xl'>
                <li>
                    <Link to='/'>My Todos</Link>
                </li>
                <li>
                    <Link to='/add'>Add New</Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    );
}
