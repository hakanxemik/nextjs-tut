import React from 'react'
import { Todo } from '../../../typing';
import TodosList from '../TodosList';
import {notFound} from 'next/navigation'

type PageProps = {
    params: {
        todoId: string
    }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {next: {revalidate: 60}});
  const todo: Todo = await res.json();
  return todo
};

async function TodoPage({params: {todoId}}: PageProps) {
  const todo = await fetchTodo(todoId)

  if (!todo.id) return notFound()
  return (
    <div className="m-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                <div className="rounded">
                    <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{todo.title}</h4>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">TodoID: {todo.id}</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                                <p className="text-sm">UserID: {todo.userId}</p>
                                <p className="text-sm">Status: {todo.completed ? 'completed' : 'open'}</p>
                                <button className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black" aria-label="edit note" role="button">
                                    <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg" alt="edit" />
                                    <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg" alt="edit" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default TodoPage;

export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await res.json();

    const trimmedTodos = todos.splice(0, 10);

    return trimmedTodos.map((todo) => ({
        todoId: todo.id.toString()
    }))
}