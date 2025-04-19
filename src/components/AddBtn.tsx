import { useNavigate } from 'react-router-dom';
import { Todo } from '../types/Todo';
import { postTodo } from '../api/postTodo';
interface Props {
    todo: Todo;
}
export default function AddBtn({ todo }: Props) {
    const navigate = useNavigate();

    const handleSubmit = () => {
        postTodo(todo.title, todo.description);
        navigate('/');
    };

    return <button onClick={handleSubmit}>Add</button>;
}