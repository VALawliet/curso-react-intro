import '../ToDoCss/ToDoCounter.css';

function ToDoCounter({total, completed}){

    if(total != completed){
      return(
  
        //Recuerda hacer esto dinamico
        <h1>
          Has completado <span className='toDoCompleted'>{completed}</span> de <span className='toDoMissing'>{total}</span> ToDos
        </h1>
      )
    }else{
      return (
      <h1>
        No hay más ToDos por completar
      </h1>)
    }
    
}

export { ToDoCounter }