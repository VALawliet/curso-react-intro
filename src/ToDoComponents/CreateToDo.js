import "./CreateToDo.css"



function CreateToDo(){

    function startingOrCancel(){
        const add = document.querySelector('.add');
        const inner = document.querySelector('.inner');
        const listItems = document.querySelectorAll('.ListItem');
        const dark = document.querySelector(".darken");
        const h1 = document.querySelector('h1');

        add.classList.toggle('cancel')
        inner.classList.toggle("inner_cancel");
        dark.classList.toggle('inactive');

        if(dark.classList.contains('inactive')==false){
            h1.classList.add('lower')

            for(let item of listItems){
                item.classList.add('lower')
            }
        }else{
            h1.classList.remove('lower')
            for(let item of listItems){
                item.classList.remove('lower')
            }
        }
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