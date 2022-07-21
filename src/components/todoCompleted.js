import TodoItem from "./todoItem"
// import TodoInput from "./todoInput"
import { observer } from 'mobx-react-lite'

function TodoCompleted() {
    return (
        <div className="main">
            {/* <TodoInput /> */}
            <TodoItem />
        </div>

    )
}

export default observer(TodoCompleted)