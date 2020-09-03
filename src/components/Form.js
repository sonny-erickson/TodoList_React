import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }
    // qd tu onClick cette fonction va dnas le state todos(grace à setTodos) créer un tableau avec le texte qui sera la fonction du dessus.
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,//le spray va permttre d'afficher les todos deja dans le state, sans ça il serait remplacé..
            {
                text: inputText, id: Math.random() *1000, completed: false
            }
        ])
        setInputText('');// pour supprimer ce qui écrit dans l'input !! mettre un value avec le inputText
    }
    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
    return(
        <form >
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" onChange={statusHandler} className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;