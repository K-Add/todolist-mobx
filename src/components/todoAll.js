import TodoInput from "./todoInput"
import TodoItem from "./todoItem"

import { observer } from 'mobx-react-lite'

function TodoAll() {
    return (
        <div className="main">
            <TodoInput />
            <TodoItem />
        </div>

    )
}

export default observer(TodoAll)