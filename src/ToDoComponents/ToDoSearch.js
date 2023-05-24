import React from "react"
import "./ToDoSearch.css"
import search from "../img/search-icon-png-1.png"

function ToDoSearch({searchValue, setSearchValue}){

    

    return(
        <div id="input-container">
            <img src={search} alt="uwu"/>
            <input placeholder="Cortar Cebolla" value={searchValue} onChange={(event)=>{
                
                setSearchValue(event.target.value);
                
            }}/>
        </div>
        
    )
}

export { ToDoSearch }