function calculate() {

    // YOUR CODE GOES HERE

    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = document.getElementById("result");
    console.log(num1, num2);
    sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    result.innerText = "The sum is: " + sum;
}