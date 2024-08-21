import Header from "./components/Header.js"
import TodoForm from "./components/TodoForm.js"
import TodoList from "./components/TodoList.js"


//$target : Root라는 DOM
export default function App({$target}) {
    const initialState = ['item1', 'item2', 'item3']

    const onSubmit = (text) => {
        const nextState = [...todoList.state, text]
        todoList.setState(nextState)
    }

    new Header({$target}) 
    new TodoForm({
        $target,
        onSubmit
    })
    
    const todoList = new TodoList({$target, initialState})
}