// Dom manipulete
// let number1 =0;
// let number2 =0;
// const button1 = document.querySelector("#button1");
// const count1 = document.querySelector("#count1");

// const button2 = document.querySelector("#button2");
// const count2 = document.querySelector("#count2");

// button1.addEventListener("click",()=>{
//     number1++;
//     count1.textContent = number1;
// })

// button2.addEventListener("click",()=>{
//     number2++;
//     count2.textContent = number2;
// })

// React DOM

const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div", null, React.createElement("p", null, "Hello World"));
const myElement = React.createElement("div", null, [
    React.createElement("p", null, "Hello World1"),
    React.createElement("p", null, "Hello World2"),
]);

// DOM mane browser dekhano
ReactDOM.render(myElement, domContainer) //render hocche run kora