import React,{useState,useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './app.css';

const App=()=>{
   const[inputText,setInputText]=useState('');
   const[todos,setTodos]=useState([]);
   const[status,setStatus]=useState("all");
   const [filteredTodos,setFilteredTodo]=useState([]);
   ///////////////
   useEffect(() => { getLocalTodos(); }, []);
   useEffect(() => { filteredHandler(); saveLocalTodos();}, [todos,status]);
  ////////////////////////////
   const filteredHandler=()=>{
     switch(status){
       case 'completed':
         setFilteredTodo(todos.filter(todo=>todo.completed === true));
         break;
       case 'uncompleted':
         setFilteredTodo(todos.filter(todo=>todo.completed === false));
         break;
      default:
        setFilteredTodo(todos);
        break;
     }  }
/////////////////////
   const saveLocalTodos=()=>{
   localStorage.setItem("todos",JSON.stringify(todos));
    };

const getLocalTodos = ()=>{
  if(localStorage.getItem("todos")===null){
    localStorage.setItem("todos",JSON.stringify([]))
}else{
let todoLocal=JSON.parse(localStorage.getItem("todos"));
setTodos(todoLocal)
}};

   return (
    <div className='App'>
      <header><h1>Ed's Todo List </h1></header>        
         <Form  setStatus={setStatus}inputText={inputText}
         todos={todos} setTodos={setTodos} setInputText={setInputText}/>
         <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
     </div>
         )

         }
export default App;