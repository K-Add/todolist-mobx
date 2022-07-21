import { makeAutoObservable, runInAction } from "mobx"
import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3004',
    timeout: 5000
})

export default class TodoStore {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
    list = []


    async getList() {
        const res = await request.get('/list')
        runInAction(() => {
            this.list = res.data
        })
    }
    async add(content) {
        const newObj = {
            content: content,
            isCompleted: false
        }

        const res = await request.post('/list', newObj)

        runInAction(() => {
            this.list.push(res.data)
            this.list = [...this.list]
            console.log(this.list, 'this.list');
        })
    }

    async del(id) {
        await request.delete(`/list/${id}`)
        runInAction(() => {
            this.list = this.list.filter((item) => item.id !== id)
        })
    }

    async update(id, isCompleted) {
        await request.patch(`/list/${id}`, {
            "isCompleted": !isCompleted
        })
        const obj = this.list.find((item) => item.id === id)
        console.log(obj);
        runInAction(() => {
            obj.isCompleted = !isCompleted
            this.list = [...this.list]
        })
    }

    // get allQuantity() {
    //     return this.list.length
    // }

    // get completedQuantity() {
    //     return this.list.filter(item => item.isCompleted).length
    // }

    // get incompletedQuantity() {
    //     return this.list.filter(item => !item.isCompleted).length
    // }
}

