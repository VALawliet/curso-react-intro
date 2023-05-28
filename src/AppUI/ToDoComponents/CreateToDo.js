import "../ToDoCss/CreateToDo.css"



function CreateToDo({setNewValue}){

    function startingOrCancel(){
        const add = document.querySelector('.add');
        const mainInput = document.querySelector('input');
        const inner = document.querySelector('.inner');
        const listItems = document.querySelectorAll('.ListItem');
        const dark = document.querySelector(".darken");
        const h1 = document.querySelector('h1');
        const addWindow = document.querySelector('.info-container');

        add.classList.toggle('cancel')
        inner.classList.toggle("inner_cancel");
        dark.classList.toggle('inactive');
        addWindow.classList.toggle('inactive')

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

        if(mainInput.hasAttribute('readonly') == true){
            mainInput.removeAttribute('readonly');

        }else{
            mainInput.setAttribute('readonly', '')
        }
    }
    return(
        
        <div className="button" onClick={()=>{
            startingOrCancel();
            setNewValue('')
        }}>
            <span className="inner"></span>
            <span className="add">+</span>
        </div>
    )
}

export {CreateToDo}