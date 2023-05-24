function ToDoItems({text, ID, toggleCheck, deleteTodos}){
    

    
    return (
      <li className="ListItem">
        <div className="Item">
          <span id={ID} className="check" onClick={()=>{toggleCheck(text)}}>✔</span>
          <p className={ID}>{text}</p>
        </div>
        
        <span className="delete" onClick={()=>{
          deleteTodos(text)
        }}>X</span>
      </li>
    )
}

export {ToDoItems}
  