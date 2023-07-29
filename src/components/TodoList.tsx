import { FC } from 'react'
import { TodoItem } from './TodoItem'
import { ITodo } from '../types/data'

interface ITodoListProps {
    items: ITodo[],
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
}
const TodoList: FC<ITodoListProps> = (prop) => {
    const { removeTodo, toggleTodo, items } = prop
    return (
        <div>{
            items.map(todo => (
                <TodoItem key={todo.id}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    {...todo} />))
        }</div>
    )
}

export { TodoList }
