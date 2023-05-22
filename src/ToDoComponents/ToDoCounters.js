import './ToDoCounter.css';

function ToDoCounter({total, completed}){
    return(
  
      //Recuerda hacer esto dinamico
      <h1>
        Has completado <span className='toDoCompleted'>{completed}</span> de <span className='toDoMissing'>{total}</span> ToDos
      </h1>
    )
}

export { ToDoCounter }