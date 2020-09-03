//https://www.youtube.com/watch?v=pCA4qpQDZD8&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=11&t=0s
import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
// State
  const [inputText, setInputText]= useState('');
  const [todos, setTodos]= useState([]);
  const [status, setStatus]= useState('all');
  const [filteredTodos, setFilteredTodos]= useState([]);


useEffect(() => {
  filterHandler();
},[status,todos])

// function
const filterHandler = () => {
  switch (status){
    case "completed":
      setFilteredTodos(todos.filter(todo => todo.completed === true))
    break
    case "uncompleted":
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break
    default:
      setFilteredTodos(todos)
  }
    
}
  return (
    <div className="App">
      <header>
      <h1>Sonny Todo List</h1>
      </header>
      <Form 
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      />
      <TodoList 
      filteredTodos={filteredTodos}
      todos={todos}
      setTodos={setTodos}/>
    </div>
  );
}

export default App;
