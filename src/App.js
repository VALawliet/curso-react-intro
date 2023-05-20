import { ToDoCounter } from './ToDoComponents/ToDoCounters';
import { ToDoSearch } from './ToDoComponents/ToDoSearch';
import { ToDoList } from './ToDoComponents/ToDoList';
import { ToDoItems } from './ToDoComponents/ToDoItem';
import { CreateToDo } from './ToDoComponents/CreateToDo';
import React from 'react';
import './App.css';


const defaultToDos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de React JS', completed: false },
  { text: 'Llorar con React', completed: false }

]
function App() {
  return (

    /* El return siempre necesita recibir un componente
    de react para funcionar de forma adecuada y, como en este caso,
    nosotros queremos deshacernos del div innecesario que había al inicio,
    podemos utilizar React.fragment como una etiqueta de apertura y cierre
    para mandar el componente al render de React que, en su momento, se deshará de él */
    <React.Fragment>
      {/* Le pasamos dos props al ToDoCounter que serán utilizados dentro del componente en su archivo */}
      <ToDoCounter completed={16} total={20}/>
      <ToDoSearch/>
      
      {/* ToDoList será un componente que cuenta con dos etiquetas; una de apertura y una de cierre.
      Todo lo que esté dentro de ToDoList react lo interpreta como una prop que usa el identificador children */}
      <ToDoList>

        {/* Utilizamos las llaves para escribir código Javascript dentro de un componente de react.
        Se utiliza el método map con el array que contiene nuestros ToDos para crear un nuevo array que contenga
        elementos por cada elemento del array original. En este caso, map devolverá un array que contendrá un ToDoItems
        que recibe un props de key para identificar cada componente de React; un texto que será insertado dentro
        del componente y el props de completed que aún no tiene uso */}
        {defaultToDos.map((todo)=>{
          return (<ToDoItems key={todo.text} text = {todo.text} completed={todo.completed}/>)
        })}
      </ToDoList>

      <CreateToDo/> 
      

      
    </React.Fragment>
  );
}



export default App;

