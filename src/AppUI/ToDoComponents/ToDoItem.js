function ToDoItems({text, ID, toggleCheck, deleteTodos, completed}){
    
  
    
    return (
      <li className="ListItem">
        <div className="Item">
          <span id={ID} className={`check ${completed? 'check-true': ''}`} onClick={()=>{toggleCheck(text)}}>✔</span>
          <p className={`${ID} ${completed? 'item-completed': ''}`}>{text}</p>
        </div>
        
        <span className="delete" onClick={()=>{
          deleteTodos(text)
        }}>X</span>
        
      </li>
      
    )
}

export {ToDoItems}
  