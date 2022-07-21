import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import useStore from '../store'


export default function TodoInput() {
    const [value, setValue] = useState('')
    const { todoList } = useStore()
    const add = () => {
        if ((value ?? '') !== '') {
            todoList.add(value)
            setValue('')
        }
    }
    return (
        <div className="todo-input">
            {/* <input className="toggle" type="checkbox" /> */}
            <input
                className="new-todo"
                placeholder="请输入新的待办项"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className='todo-submit' onClick={add}>添加</button>
        </div>

    )
}