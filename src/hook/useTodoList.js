import { toJS } from 'mobx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useStore from "../store";

export default function useTodoList() {
    const { pathname } = useLocation()
    const { todoList } = useStore()
    let listCopy = toJS(todoList.list)
    const [list, setList] = useState(listCopy)
    useEffect(() => {
        switch (pathname) {
            case '/':
                setList(listCopy)
                break
            case '/incompleted':
                listCopy = listCopy.filter(item => !item.isCompleted)
                setList(listCopy)
                break
            case '/completed':
                listCopy = listCopy.filter(item => item.isCompleted)
                setList(listCopy)
                break
            default:
                console.log(1111111);
        }
    }, [pathname, todoList.list])

    console.log(list, 'list');
    return list
}