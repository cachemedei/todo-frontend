import { useState } from "react";
import { Todo } from "../types/Todo";
import AddBtn from "../components/AddBtn";

export default function AddNewTodo() {
      const [newTodo, setNewTodo] = useState<Todo>({
        title: '',
        description: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setNewTodo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
  return (
            <form className='flex flex-col w-[400px] mx-auto gap-y-4'>
            <input
                type='text'
                placeholder='Title'
                name='title'
                aria-placeholder='add a task'
                className='border-[1px] rounded p-3 text-black'
                onChange={handleChange}
            />
            <textarea
                className='border-[1px] rounded p-3 text-black'
                rows={4}
                placeholder='Description'
                name='description'
                onChange={handleChange}
            ></textarea>

            <AddBtn todo={newTodo} />
        </form>
  )
}