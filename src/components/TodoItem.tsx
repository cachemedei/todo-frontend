import { Todo } from '../types/Todo';
import DeleteBtn from './DeleteBtn';

interface Props {
    todo: Todo;
}
export default function TodoItem({ todo }: Props) {
    return (
        <section className='p-3'>
            <div className='flex items-center space-x-2'>
                <input
                    className='size-4'
                    type='checkbox'
                    checked={todo.isCompleted}
                />
                <p className='text-2xl font-heading tracking-widest'>
                    {todo.title}
                </p>
            </div>
            {!todo.isCompleted && (
                <p className='p-2 ml-2 mb-2'>{todo.description}</p>
            )}
            <DeleteBtn id={todo.id} />
        </section>
    );
}