import "../ToDoCss/AddToDoWindow.css";

function AddToDoWindow({ newValue, setNewValue, addingTodos }) {
  function ChangingCss() {
    const mainDiv = document.querySelector(".info-container");
    const mainInput = document.querySelector("input");
    const add = document.querySelector(".add");
    const inner = document.querySelector(".inner");
    const listItems = document.querySelectorAll(".ListItem");
    const dark = document.querySelector(".darken");
    const h1 = document.querySelector("h1");

    add.classList.remove("cancel");
    inner.classList.remove("inner_cancel");
    h1.classList.remove("lower");
    dark.classList.add("inactive");
    mainDiv.classList.toggle("inactive");

    for (let item of listItems) {
      item.classList.remove("lower");
    }

    if (mainInput.hasAttribute("readonly") == true) {
      mainInput.removeAttribute("readonly");
    } else {
      mainInput.setAttribute("readonly", "");
    }
  }

  return (
    <div className="info-container inactive">
      <input
        type="text"
        placeholder="Añadir tarea"
        value={newValue}
        onChange={(event) => {
          setNewValue(event.target.value);
        }}
        onKeyDown={(Event) => {
          if (Event.key == "Enter") {
            addingTodos(newValue);
            ChangingCss();
            setNewValue("");
          }
        }}
      />

      <div className="buttons">
        <button className="submit-button">
          <span
            className="btn-text"
            onClick={() => {
              addingTodos(newValue);
              ChangingCss();
              setNewValue("");
            }}
          >
            Añadir
          </span>

          <span className="inner"></span>
        </button>

        <button className="btn-cancel" onClick={()=>{
          ChangingCss()
        }}>
          <span className="btn-text">Cancelar</span>
        
          <span className="inner"></span>
        </button>
      </div>
    </div>
  );
}

export { AddToDoWindow };
