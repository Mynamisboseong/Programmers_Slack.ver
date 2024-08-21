import Header from "./components/Header.js"
import TodoForm from "./components/TodoForm.js"
import TodoList from "./components/TodoList.js"


//$target : Root라는 DOM
export default function App({$target}) {
    const initialState = [
        { id: 1, text: "item1 ", checked: true },
        { id: 2, text: "item2 ", checked: false},
        { id: 2, text: "item3 ", checked: false}
    ]

    let lastId = 4

    const onSubmit = (text) => {
        const nextState = [...todoList.state, {id: lastId,text}]
        todoList.setState(nextState)
    }

    const onDelete = (id) => {
        const nextState = todoList.state.filter((todo) => todo.id !== id)
        todoList.setState(nextState)
        lastId++
    }
    const header = new Header({$target}) 

    header.setState("오늘 할 일")

    new TodoForm({
        $target,
        onSubmit
    })
    
    const todoList = new TodoList({$target, initialState, onDelete})
}