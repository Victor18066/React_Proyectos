import Todo from './Todo'

export default function ToDoList ({todos, setTodos, filteredTodos}) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        todo={todo}
                        text={todo.text} 
                        key={todo.id}
                        setTodos={setTodos} 
                        todos={todos}
                    />
                ))}
            </ul>
        </div>
    )
}