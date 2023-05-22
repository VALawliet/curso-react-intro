import "./CreateToDo.css"


function CreateToDo(){

    function startingOrCancel(){
        const add = document.querySelector('.add');
        const inner = document.querySelector('.inner')

        add.classList.toggle('cancel')
        inner.classList.toggle("inner_cancel")
    }
    return(
        
        <div className="button" onClick={()=>{
            startingOrCancel()
        }}>
            <span className="inner"></span>
            <span className="add">+</span>
        </div>
    )
}

export {CreateToDo}