/*
    author: ri-ca4
    date: 6/2022
    title: calculator
*/

var display   = document.getElementById('display');
var userInput = '';

function inputNum(e){
    userInput += e.value;
    display.innerHTML = userInput;
}

function inputOp(e){
    if(userInput == ''){
        return
    }
    userInput += e.value;
    display.innerHTML = userInput;
}