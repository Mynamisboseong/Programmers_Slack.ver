import Header from "./components/Header.js"
import TodoForm from "./components/TodoForm.js"
import TodoList from "./components/TodoList.js"


//$target : Root라는 DOM
export default function App({$target}) {
    const initialState = [{
        id: 1,
        text: "할일 1",
        checked: false,
    },
    {
        id: 2,
        text: "할일 2",
        checked: false,
    },
    {
        id: 3,
        text: "할일 3",
        checked: true,
    }
]


    new Header({$target})
    new TodoForm({$target})
    new TodoList({$target, initialState})
}