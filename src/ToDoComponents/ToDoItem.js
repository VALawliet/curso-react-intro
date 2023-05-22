function ToDoItems({text, ID}){
    function toggleCheckTrue(id){

      const checks = document.querySelectorAll('.check');
      const ps = document.querySelectorAll('p');

      for(let check of checks){

        if(check.id == id){
          
          check.classList.toggle('check-true');
          for(let p of ps){
            if(p.classList.contains(id)){
              p.classList.toggle('item-completed')
            }
          }

        }
      }

      
    }

    
    return (
      <li className="ListItem">
        <div className="Item">
          <span id={ID} className="check" onClick={()=>{toggleCheckTrue(ID)}}>✔</span>
          <p className={ID}>{text}</p>
        </div>
        
        <span className="delete">X</span>
      </li>
    )
}

export {ToDoItems}
  