import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import TodosActions from "./components/Todos/TodosActions";
import todo from "./components/Todos/Todo";

function App() {

  const [todos,setTodos] = useState([])

  const addTodoHandler = (text) =>{
    const newTodo ={
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = ((id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id ))
  })

  const toggleTodoHandler = ((id)=>{
    setTodos(todos.map((todo)=>{
      return todo.id === id
        ? {...todo, isCompleted: !todo.isCompleted}
        : {...todo}
    }))
  })

  const resetTodosHandler = ()=>{
    setTodos([])
  }

  const deleteCompletedTodosHandler = ()=>{
    setTodos(todos.filter((todo)=> !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo)=>todo.isCompleted).length

  return (
    <div className="App">
      <h1>todo app</h1>
      <TodoForm  addTodo={addTodoHandler}/>
      {todos.length>0 && <TodosActions completedTodosExist={!!completedTodosCount} resetTodos={resetTodosHandler} deleteComplitedTodos={deleteCompletedTodosHandler}/>}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler}/>
      {
        completedTodosCount>0 && <h2>{`completed ${completedTodosCount}`}</h2>
      }
    </div>
  );
}

export default App;
