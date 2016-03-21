//For some reason, this is broken now.  It can't do anything except addition.  You gotta fix this bruh.

// Functions

var add = function(number1, number2){
  return number1 + number2
};
var subtract = function(number1, number2){
  return number1 - number2
};
var multiply = function(number1, number2){
  return number1 * number2
};
var divide = function(number1, number2){
  return number1 / number2
};

var maths = function (mathType, number1, number2){
  if(mathType === "ADDITION"){
    answer = add(number1, number2);

  } else if(mathType === "SUBTRACTION"){
    answer = subtract(number1, number2);

  } else if(mathType === "MULTIPLICATION"){
    answer = multiply(number1, number2);

  } else if(mathType === "DIVISION"){
    answer = divide(number1, number2);
  }
  return answer;
}

//Start Prompts
var mathType = prompt("What Kind of Operation Will You Do?  Please type 'addition', 'subtraction', 'multiplication' or 'division'.");
var mathType = mathType.toUpperCase();

if(mathType !== "ADDITION" && mathType !== "SUBTRACTION" && mathType !== "MULTIPLICATION" && mathType !== "DIVISION"){
  alert("Sorry that is not a valid answer");
}else{
  var firstNumber = parseInt(prompt("Give me a number"));
  var secondNumber = parseInt(prompt("Give me another number"));
  maths(mathType, firstNumber, secondNumber);
  alert("The Answer Is: " + answer);
}

//Second Operation Prompt
var response = prompt("Do You Want to Perform Another Operation?");
response = response.toUpperCase();
  if (response === "YES"){
    //Do you Want To Use Previous Answer in Calculation
    var response2 = prompt("Do You Want to Use Your Previous answer in your calculation?")
    response2 = response2.toUpperCase();
    //If YES
    if (response2 === "YES"){
      mathType = prompt("Your current number is " + answer + ". What operation would you like to perform?");
      mathType = mathType.toUpperCase()
      if(mathType !== "ADDITION" && mathType !== "SUBTRACTION" && mathType !== "MULTIPLICATION" && mathType !== "DIVISION"){
        alert("Sorry that is not a valid answer");
      }else{
        var secondNumber = parseInt(prompt("Give me another number"));
        maths(mathType, answer, secondNumber);
        alert("The Answer Is: " + answer);
      }
    //IF NO
    }else{
      mathType = prompt("What operation would you like to perform?");
      mathType = mathType.toUpperCase();
      if(mathType !== "ADDITION" && mathType !== "SUBTRACTION" && mathType !== "MULTIPLICATION" && mathType !== "DIVISION"){
        alert("Sorry that is not a valid answer");
      }else{
        var firstNumber = parseInt(prompt("Give me a number"));
        var secondNumber = parseInt(prompt("Give me another number"));
        maths(mathType, firstNumber, secondNumber);
        alert("The Answer Is: " + answer);
      }
    }
  // QUIT OUT
  }else{
    alert("FINE.");
  }
