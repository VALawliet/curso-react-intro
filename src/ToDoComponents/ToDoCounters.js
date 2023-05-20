function ToDoCounter({total, completed}){
    return(
  
      //Recuerda hacer esto dinamico
      <h1>
        Has completado {completed} de {total} ToDos
      </h1>
    )
}

export { ToDoCounter }