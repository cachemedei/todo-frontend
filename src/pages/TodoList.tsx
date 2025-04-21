import TodoItem from "../components/TodoItem";
import useTodos from "../hooks/useTodoList";
import { useAuth } from "../hooks/useAuth";

export default function TodoList() {
    const {auth} = useAuth();

    const id = Number(auth.userId)

    const { todoList, isLoading } = useTodos(id);

    if (isLoading) {
        return <p>Loading</p>;
    }

    return (
        <>
        <ul className='w-[450px]'>
            {todoList?.map((todo) => (
                <li key={todo.id}>
                    <TodoItem todo={todo} />
                </li>
            ))}
        </ul>
        </>
    );
}