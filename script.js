
//color changed
function changeColor() {
    let button = document.getElementById("colorBtn");
    button.style.backgroundColor="red"; 
}

//greetings
let now = new Date();
let hour = now.getHours();

let greeting;

if (hour < 12) {
    greeting = "Good morning!";
} else if (hour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

alert(greeting);

//add two numbers
function addNumbers() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    let result = number1 + number2;

    document.getElementById("result").innerText = "Result: " + result;
}