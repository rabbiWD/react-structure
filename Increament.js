const domContainer = document.querySelector("#root");

const myElement = (
    <div class="counter"> 
        <h1>Counter</h1>
        <div id="count" class="count">
            0
        </div>
        <div class="buttons">
            <button>Increament</button>
        </div>
    </div>
)

ReactDOM.render(myElement, domContainer);