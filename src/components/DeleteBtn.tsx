import { useNavigate } from 'react-router-dom';
import { deleteTodo } from '../api/deleteTodo';

interface Props {
    id: number | undefined;
}
export default function DeleteBtn({ id }: Props) {
    const navigate = useNavigate()

    const handleDelete = () => {
        if(id !== undefined) {
            deleteTodo(id)
            navigate(0)
        }
    }
    return (
        <button
            className='px-1.5 border border-gray-500 rounded text-sm'
            onClick={handleDelete}
        >
            delete
        </button>
    );
}
