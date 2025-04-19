import TodoItem from "../components/TodoItem";
import useTodos from "../hooks/useTodoList";

export default function TodoList() {
    const { todoList, isLoading } = useTodos();

    if (isLoading) {
        return <p>Loading</p>;
    }

    return (
        <ul className='w-[450px]'>
            {todoList?.map((todo) => (
                <li key={todo.id}>
                    <TodoItem todo={todo} />
                </li>
            ))}
        </ul>
    );
}
