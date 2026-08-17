import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    // state.todos = slice state, and .todos = actual array
    const todos = useSelector(state => state.todos.todos)

    const dispatch = useDispatch()

    return (
        <>
            <div>To do</div>

            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 rounded text-md"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos