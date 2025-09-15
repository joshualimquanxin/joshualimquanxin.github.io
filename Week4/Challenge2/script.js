// // Task 1
// // Add an event listner to the button (the user drags his mouse over the button)
// function func1() {
//     box = document.getElementById("result");
//     box.innerText = "Welcome to My Heart";
//     box.style.backgroundColor = "pink";
//     box.style.color = "blue";
// }

// // Task 2
// // Add an event listner to the button (the user drags his mouse out of the button)
// function func2() {
//     box = document.getElementById("result");
//     box.innerText = "Don't Leave My Heart";
//     box.style.backgroundColor = "black";
//     box.style.color = "red";
// }

btn = document.getElementById("justin-btn");
btn.addEventListener('mouseover', () => {
    box = document.getElementById("result");
    box.innerText = "Welcome to My Heart";
    box.style.backgroundColor = "pink";
    box.style.color = "blue";
})

btn.addEventListener('mouseout', () => {
    box = document.getElementById("result");
    box.innerText = "Don't Leave My Heart";
    box.style.backgroundColor = "black";
    box.style.color = "red";
})