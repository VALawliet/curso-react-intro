import "../ToDoCss/EmptyTodos.css"

function EmptyTodos({totalTodos}){
    if(totalTodos == 0){
        return(
            <p>Acá hacen falta un par de ToDos...</p>
        )
    }else{

        return(
            <p>No hay ningún ToDo relacionado a tu búsqueda</p>
        )
        
    }
    
}

export {EmptyTodos}