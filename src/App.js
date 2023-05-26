import { ToDoCounter } from './ToDoComponents/ToDoCounters';
import { ToDoSearch } from './ToDoComponents/ToDoSearch';
import { ToDoList } from './ToDoComponents/ToDoList';
import { ToDoItems } from './ToDoComponents/ToDoItem';
import { CreateToDo } from './ToDoComponents/CreateToDo';
import { Darken } from './ToDoComponents/Darken';
import React from 'react';



/* const defaultToDos = [
  { text: 'Cortar Cebolla', completed: false, num: 0 },
  { text: 'Tomar el curso de React JS', completed: false, num: 1 },
  { text: 'Llorar con React', completed: false, num: 2 },
  { text: 'Ejemplo', completed: false, num: 3 },
  { text: 'React me estresa', completed: false, num: 4 },
  { text: 'unu', completed: false, num: 5 }

]

localStorage.setItem('TODOS_V1', defaultToDos);
localStorage.removeItem('TODOS_V1'); */

function useLocalStorage(itemName, initialValue){

  
  const localStorageResponse = localStorage.getItem(itemName);
  let parsedItems;

  if(!localStorageResponse){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItems = initialValue;

  }else{

    let jsonResponse = JSON.parse(localStorageResponse);
    parsedItems = jsonResponse
  }

  const [Item, setItem] = React.useState(parsedItems);

  function saveItems(newItems){
    let stringJson = JSON.stringify(newItems)
    localStorage.setItem(itemName, stringJson)
    setItem(newItems);
  };

  return [Item, saveItems];
}

function App() {

  

  const [todos, saveTodos]= useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState("");
  

  const completedTodos = todos.filter((todo)=>{
    return todo.completed == true;
  }).length ;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo)=>{

    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });
  //Función para completed

 

  
    
  function toggleCheckTrue(text){
    
    const checks = document.querySelectorAll('.check');
    const ps = document.querySelectorAll('p');
    const newTodos = [...todos];
    const newTodoID = newTodos.findIndex((todo)=>{
      return todo.text == text
    })
    
    checks[newTodoID].classList.toggle('check-true');
    ps[newTodoID].classList.toggle('item-completed');
    if(checks[newTodoID].classList.contains('check-true')){
      newTodos[newTodoID].completed = true;
      saveTodos(newTodos)
    }
    else{
      newTodos[newTodoID].completed = false;
    saveTodos(newTodos)
    }
    

    
    

    /* if(checks[newTodoID].classList.contains('check-true')){
      newTodos[newTodoID].completed	= true;
      saveTodos(newTodos)
    }else{
      newTodos[newTodoID].completed	= false;
      saveTodos(newTodos)
    } */


    /* for(let check of checks){

      if(check.t == text){
        
        check.classList.toggle('check-true');
        if(check.classList.contains('check-true')){
          
          newTodos[newTexts].completed = true;
          setTodos(newTodos)
        }else{
          const newTodos = [...todos];
          const newTexts = newTodos.findIndex((todo)=>{
            return todo.text == text
          })
          newTodos[newTexts].completed = false;
          setTodos(newTodos)
        }
      }
    } */

    

    
  }

  function deletingTodo(text){
    const newTodos = [...todos];
    const TodoIndex = newTodos.findIndex((todo)=>{
      return todo.text == text;
    });

    newTodos.splice(TodoIndex, 1);
    saveTodos(newTodos)
  }

  
  
  return (

    /* El return siempre necesita recibir un componente
    de react para funcionar de forma adecuada y, como en este caso,
    nosotros queremos deshacernos del div innecesario que había al inicio,
    podemos utilizar React.fragment como una etiqueta de apertura y cierre
    para mandar el componente al render de React que, en su momento, se deshará de él */
    <React.Fragment>
      {/* Le pasamos dos props al ToDoCounter que serán utilizados dentro del componente en su archivo */}

      <Darken/>
      <ToDoCounter completed={completedTodos} total={totalTodos}/>
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      
      {/* ToDoList será un componente que cuenta con dos etiquetas; una de apertura y una de cierre.
      Todo lo que esté dentro de ToDoList react lo interpreta como una prop que usa el identificador children */}

      
      <ToDoList>

        {/* Utilizamos las llaves para escribir código Javascript dentro de un componente de react.
        Se utiliza el método map con el array que contiene nuestros ToDos para crear un nuevo array que contenga
        elementos por cada elemento del array original. En este caso, map devolverá un array que contendrá un ToDoItems
        que recibe un props de key para identificar cada componente de React; un texto que será insertado dentro
        del componente y el props de completed que aún no tiene uso */}
        {searchedTodos.map((todo)=>{
          return (<ToDoItems key={todo.num} text = {todo.text} completed={todo.completed} ID = {todo.num} toggleCheck = {toggleCheckTrue} deleteTodos = {deletingTodo}/>)
        })}
      </ToDoList>

      <CreateToDo/> 
      

      
    </React.Fragment>
  );
}



export default App;

