import "./ToDoSearch.css"
import search from "../img/search-icon-png-1.png"

function ToDoSearch(){
    return(
        <div id="input-container">
            <img src={search} alt="uwu"/>
            <input placeholder="Cortar Cebolla"/>
        </div>
        
    )
}

export { ToDoSearch }