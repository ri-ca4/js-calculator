/*
    author: ri-ca4
    date: 6/2022
    title: calculator
*/

//define variables
const display   = document.getElementById('display');
var userInput = '';
var operators = ['*', '/', '+', '-'];

function inputNum(e){//add new number to string
    userInput += e.value;
    display.innerHTML = userInput;
}

function inputOp(e){//when operator button is pressed
    var operator = e.value;
    var nums = [];
    if(operator == '-'){
        if(userInput == '' || userInput[userInput.length - 1] == ' '){//if - is first character or after another operator
            userInput += '-';//add - before number
            display.innerHTML = userInput;
            return;
        }
    }
    if(userInput == ''){//if there is no input do nothing
        return;
    }else if(userInput.indexOf(' * ') == -1
           &&userInput.indexOf(' / ') == -1
           &&userInput.indexOf(' + ') == -1
           &&userInput.indexOf(' - ') == -1){//if there is no operator
            //console.log('there no operator')
            userInput += ' ' + e.value + ' ';//add operator to string
            display.innerHTML = userInput;
        }else{//if there is an operator
            var arr  = userInput.split(' '); //make string into array
            for(i=0; i<arr.length; i++){ //convert string to numbers
                if(!operators.includes(arr[i])){//skip over operator
                //convert strings to numbers
                    nums.push(parseFloat(arr[i]));
                    console.log(nums)
                }
            }
            result = calculate(operator, nums);//calculate result
            userInput = result.toString();//result to string
            userInput += ' ' + e.value + ' ';//add new operator to string
            display.innerHTML = userInput;
        }
}

function clearAll(){//delete all user input
    userInput = '';
    display.innerHTML = userInput;
}

function backSpace(){//removing last number or operator
    var lastChar = userInput.slice(-1);
    if(lastChar == ' '){//if last character is a space remove operator and spaces around
        userInput = userInput.slice(0, -3);
        display.innerHTML = userInput;
    }else{//remove last number
        userInput = userInput.slice(0, -1);
        display.innerHTML = userInput;
    }
}

function equals(){//when equals is pressed
    if(userInput == '' ){//if there is no input do nothing
        return
    }else{//check if entry is long enough and get numbers and operator
        var arr  = userInput.split(' ');//create array
        if(arr.length == 3){
            var nums = [];
            var operator;
            for(i=0; i<arr.length; i++){ //convert string to numbers and operator
                var arr  = userInput.split(' '); //make string into array
                if(operators.includes(arr[i])){//assign operator value
                    operator = arr[i];
                }else{//convert string to number
                    nums.push(parseFloat(arr[i]))
                }
            }
            result = calculate(operator, nums);//calculate result
            userInput = result.toString();//number to string
            display.innerHTML = userInput;
            console.log(userInput)
        }else{
            return
        }
    }
}

function calculate(operator, nums){//do the math
    if(operator == '*'){//multiply
        userInput = nums[0] * nums[1];
        display.innerHTML = userInput;
        return userInput;
    }
    if(operator == '/'){//divide
        userInput = nums[0] / nums[1];
        display.innerHTML = userInput;
        return userInput;
    }
    if(operator == '+'){//add
        userInput = nums[0] + nums[1];
        display.innerHTML = userInput;
        return userInput;
    }
    if(operator == '-'){//subtract
        userInput = nums[0] - nums[1];
        display.innerHTML = userInput;
        return userInput;
    }
}
