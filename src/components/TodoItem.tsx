import { FC } from 'react'
import { ITodo } from '../types/data'


interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void,

}

const TodoItem: FC<ITodoItem> = (prop) => {

    const { id, title, complete, removeTodo, toggleTodo } = prop
    return (
        <div className='todoContainer'>
            <input type='checkbox' checked={complete} onChange={() => toggleTodo(id)} />
            <span><i>{title}</i></span>
            <button onClick={() => removeTodo(id)}
                style={{ background: 'transparent', border: 'none', outline: 'none', color: 'red' }}
            >X</button>
        </div>
    )
}

export { TodoItem }