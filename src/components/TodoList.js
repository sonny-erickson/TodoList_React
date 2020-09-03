import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    
    return(
    <div className="todo-container">
        {filteredTodos.map(todo =>
            <Todo  
                key={todo.id}
                title={todo.text}
                todos={todos}// coorespont à tous les éléments (state)
                todo={todo}//correspont a un seul élément, celui du map
                setTodos={setTodos}
            />
            )}
        
      </div>
      )
}


export default TodoList;