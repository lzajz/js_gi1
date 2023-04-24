const firstNumber = parseInt(prompt("Please enter the first number"));
const operator = prompt("Please enter a operator (+,-,*,/)");
const secondNumber = parseInt(prompt("Please enter the second number"));


function add(numOne,numTwo){ 
    return numOne+numTwo  
}
function subtract(numOne,numTwo){
    return numOne-numTwo
}
function multiply (numOne,numTwo){
    return numOne*numTwo
}
function divide (numOne,numTwo){
    return numOne/numTwo
}

function calculator(numOne,numTwo, operator){
    if (operator == "+"){                           //$ calls for what it is 
        let result = add(numOne,numTwo)
        return `${numOne} ${operator} ${numTwo} = ${result}`
    }
    else if (operator == "-"){
     let result = subtract(numOne,numTwo)
     return `${numOne} ${operator} ${numTwo} = ${result}`
   }
   else if (operator == "*"){
    let result = multiply(numOne,numTwo)
     return `${numOne} ${operator} ${numTwo} = ${result}`
  }
  else {
    let result = divide(numOne,numTwo)
    return `${numOne} ${operator} ${numTwo} = ${result}`
  }
  }

console.log(calculator(firstNumber,secondNumber,operator));


