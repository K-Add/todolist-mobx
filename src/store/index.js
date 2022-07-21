import { createContext, useContext } from "react";
import TodoStore from "./TodoListStore";

class Store {
    constructor() {
        this.todoList = new TodoStore()
    }
}

const store = new Store()

const context = createContext(store)

const useStore = () => useContext(context)

export default useStore