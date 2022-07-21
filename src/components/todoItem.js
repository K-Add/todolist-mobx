import React from "react";
import { observer } from 'mobx-react-lite'
import useStore from "../store";
import useTodoList from "../hook/useTodoList";

const TodoItem = () => {
    const { todoList } = useStore()
    const list = useTodoList(todoList)
    return (
        <ul className="todo-list">
            {
                list.map((item) =>
                (
                    <li className="todo-item" key={item.id} >
                        <input
                            className="toggle"
                            type="checkbox"
                            defaultChecked={item.isCompleted}
                            onChange={() => todoList.update(item.id, item.isCompleted)}
                        />
                        <label className={item.isCompleted ? 'finish' : ''}>{item.content}</label>
                        <span className="delete" onClick={() => todoList.del(item.id)}></span>
                    </li>
                )
                )
            }
        </ul>
    )
}

export default observer(TodoItem)