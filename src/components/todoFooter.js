import { observer } from 'mobx-react-lite'
import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
import useTodoList from "../hook/useTodoList";
import useStore from "../store";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';




function TodoFooter() {
    const { todoList } = useStore()

    useEffect(() => {
        todoList.getList()
    }, [todoList])
    const list = useTodoList(todoList)
    return (
        <footer className="footer">
            <span className="todo-count">共有{list.length}项</span>
            <ul className="tab">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => "all" + (isActive ? " selected" : "")}
                    >
                        全部
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/incompleted"
                        className={({ isActive }) => "incomplete" + (isActive ? " selected" : "")}
                    >
                        未完成
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/completed"
                        className={({ isActive }) => "complete" + (isActive ? " selected" : "")}
                    >
                        已完成
                    </NavLink>
                </li>
            </ul>
            {/* <span className="todo-clear" onClick={() => todoList.delAll()}>删除所有完成项</span> */}
        </footer>
    )
}
export default observer(TodoFooter)