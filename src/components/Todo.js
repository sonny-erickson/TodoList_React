import React from 'react';

const Todo = ({title, todo, todos, setTodos}) => {
    const deleteHandle = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id))
        console.log(todo)
    }// la fonction filter va créer un new array, si l'el id est différent en valeur et en type de todo.id =false
    // et si true on refait le tableau sans cette el
    const completeHandle = () =>{
        setTodos(todos.map(item =>{
            if(item.id === todo.id){
                return{
                    ...item, // recup toutes les valeurs de l'item (dont la key)!!
                    completed :!item.completed
                }

            }
            return item
        }))
    }
    
    return(
    <div className="todo">
       <ul className={`todo-item ${todo.completed ? 'completed' : ''}`}>{title}</ul>
       <button onClick={completeHandle} className='complete-btn'><i className='fas fa-check'></i></button>
       <button onClick={deleteHandle} className='trash-btn'><i className='fas fa-trash'></i></button>
      </div>
      )
}


export default Todo;