import { ToDoCounter } from './ToDoComponents/ToDoCounters';
import { ToDoSearch } from './ToDoComponents/ToDoSearch';
import { ToDoList } from './ToDoComponents/ToDoList';
import { ToDoItems } from './ToDoComponents/ToDoItem';
import { CreateToDo } from './ToDoComponents/CreateToDo';
import './App.css';


function App() {
  return (
    <div className="App">

      <ToDoCounter/>
      <ToDoSearch/>
      
      <ToDoList>
        <ToDoItems/>
        <ToDoItems/>
        <ToDoItems/>
      </ToDoList>

      <CreateToDo/> 
      

      
    </div>
  );
}



export default App;

