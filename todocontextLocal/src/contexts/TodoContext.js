// Import createContext to create a Context
// Import useContext to access the Context data inside components
import { createContext, useContext } from "react";


// Create a Context for our Todo application
// createContext({}) creates a shared data space
// The {} is the default value of the Context
export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"Todo msg",
        completed:false
    }
    ],
    // Functions for adding, updating, deleting and completing Todos
    // Actual logic for these functions will be written later
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});


// Create our own custom hook called useTodo
// Instead of writing useContext(TodoContext) everywhere,
// we can simply write useTodo()
export const useTodo = () => {

    // Get the data stored inside TodoContext
    return useContext(TodoContext);
};


// TodoProvider is the Provider of our TodoContext
// It allows us to provide/share Todo data with
// all the components placed inside this Provider
export const TodoProvider = TodoContext.Provider;