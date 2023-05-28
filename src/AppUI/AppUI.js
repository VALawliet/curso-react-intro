import { ToDoCounter } from './ToDoComponents/ToDoCounters';
import { ToDoSearch } from './ToDoComponents/ToDoSearch';
import { ToDoList } from './ToDoComponents/ToDoList';
import { ToDoItems } from './ToDoComponents/ToDoItem';
import { CreateToDo } from './ToDoComponents/CreateToDo';
import { Darken } from './ToDoComponents/Darken';
import { ToDosLoading } from './ToDoComponents/ToDosLoading';
import { ToDosError } from './ToDoComponents/ToDosError';
import { EmptyTodos } from './ToDoComponents/EmptyTodos';
import { ToDoWaiting } from './ToDoComponents/ToDoWaiting';
import { LoadingCreate } from './ToDoComponents/LoadingCreate';
import { AddToDoWindow } from './ToDoComponents/AddTodoWindow';

function AppUI({
    loading,
    err, 
    completedTodos, 
    totalTodos, 
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    saveTodos, 
    toggleCheckTrue, 
    deletingTodo,
    newValue,
    setNewValue,
    addingTodos


    }){
    return(

        <>
            <Darken/>
            {loading && <ToDoWaiting/>}
            {!loading && <ToDoCounter completed={completedTodos} total={totalTodos}/>}
        

            <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} searchedTodos = {searchedTodos} saveTodos = {saveTodos}/>
      
            {/* ToDoList será un componente que cuenta con dos etiquetas; una de apertura y una de cierre.
            Todo lo que esté dentro de ToDoList react lo interpreta como una prop que usa el identificador children */}

      
            <ToDoList>

                {/* Utilizamos las llaves para escribir código Javascript dentro de un componente de react.
                Se utiliza el método map con el array que contiene nuestros ToDos para crear un nuevo array que contenga
                    elementos por cada elemento del array original. En este caso, map devolverá un array que contendrá un ToDoItems
                que recibe un props de key para identificar cada componente de React; un texto que será insertado dentro
                del componente y el props de completed que aún no tiene uso */}

                {loading && 
                <>
                    <ToDosLoading/> 
                    <ToDosLoading/>
                </>}


                {err && <ToDosError/>}
                {(!loading && searchedTodos.length == 0) && <EmptyTodos totalTodos = {totalTodos}/>}

                {searchedTodos.map((todo)=>{
                    return (<ToDoItems key={todo.text} text = {todo.text} completed={todo.completed} ID = {todo.num} toggleCheck = {toggleCheckTrue} deleteTodos = {deletingTodo}/>)
                })}

            </ToDoList>

            {loading && <LoadingCreate/>}


            {!loading && <CreateToDo setNewValue={setNewValue}/>}

            {!loading && <AddToDoWindow newValue = {newValue} setNewValue = {setNewValue} addingTodos = {addingTodos}/>}


      
      </>



    )
}

export { AppUI }