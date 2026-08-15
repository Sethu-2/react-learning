import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  // Stores all Todos in an array
  // setTodos is used to update the Todo list
  const [todos, setTodos] = useState([])


  // Adds a new Todo to the beginning of the array
  // Date.now() gives each Todo a unique ID
  const addTodo = (todo) => {
    setTodos((prev) => [
      { id: Date.now(), ...todo },
      ...prev
    ])
  }


  // Updates a Todo by finding it using its ID
  // map() creates a new array with the updated Todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? todo : prevTodo
      )
    )
  }


  // Removes the Todo whose ID matches the given ID
  // filter() keeps all other Todos
  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    )
  }


  // Changes a Todo between completed and incomplete
  // !completed converts true → false and false → true
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    )
  }

  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length >0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])


  return (
    // Provides Todo data and functions to all child components
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete
      }}
    >

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

          <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-white">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>

          <div className="flex flex-wrap gap-y-3">
            {/* Loop through todos and display TodoItem components */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ) )}
          </div>

        </div>
      </div>

    </TodoProvider>
  )
}

export default App