import '../ToDoCss/ToDoList.css'

function ToDoList({children}){
    return(
        <ul>
            {children}
        </ul>
    )
}

export {ToDoList}