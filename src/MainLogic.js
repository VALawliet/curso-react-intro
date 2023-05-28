import { AppUI } from "./AppUI/AppUI";
import { useLocalStorage } from "./useLocalStorage/useLocalStorage"
import React from "react";

function MainLogic(){
    const {Item: todos, saveItems: saveTodos, loading, err} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState("");
    const [newValue, setNewValue] = React.useState("")
    


  

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
    const newTodos = [...todos]
    const newTodos2 = [...searchedTodos];
    const newTodoID = newTodos.findIndex((todo)=>{
      
      return todo.text == text
    });
    console.log(newTodoID)
    const newTodoID2 = newTodos2.findIndex((todo)=>{
      return todo.text == text
    })
    
    
    checks[newTodoID2].classList.toggle('check-true');
    ps[newTodoID2].classList.toggle('item-completed');
    if(checks[newTodoID2].classList.contains('check-true')){
      

      for(let todo of newTodos){
        if(todo.text == newTodos2[newTodoID2].text){
          todo.completed = true;
        };
      };

      saveTodos(newTodos);
    }
    else{

      for(let todo of newTodos){
        if(todo.text == newTodos2[newTodoID2].text){
          todo.completed = false;
        }
      }
      saveTodos(newTodos);
    };
    

    
    

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

  function addingTodos(text){
    
    const newTodos = [...todos];


    const newObjectTodo = {
      text: `${text}`,
      completed: false,
      num: 0
    
    }
    let counter = 0;
    for(let todo of newTodos){

      if(todo.text == text){
        counter = counter + 1
      }
    }

    if(text == ""){
      
      alert('La tarea no puede ser un texto vacío');
      return 0
    }

    if(counter == 0){
      newTodos.push(newObjectTodo);
    }else{
      alert('Las tareas no pueden estar repetidas')
    }

    
    saveTodos(newTodos);
    


  }

  return (<AppUI
    loading={loading}
    err = {err}
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    saveTodos = {saveTodos}
    toggleCheckTrue = {toggleCheckTrue}
    deletingTodo = {deletingTodo}
    newValue = {newValue}
    setNewValue = {setNewValue}
    addingTodos = {addingTodos}
    
    />)
}

export {MainLogic}