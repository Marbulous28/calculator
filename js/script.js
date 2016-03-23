
//Functions

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

$(document).ready(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});

/*
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
var typePrompt = "What Kind of Operation Would You Like To Perform?  Please type 'addition', 'subtraction', 'multiplication' or 'division'."
var mathType = prompt(typePrompt).toUpperCase();


if(mathType !== "ADDITION" && mathType !== "SUBTRACTION" && mathType !== "MULTIPLICATION" && mathType !== "DIVISION"){
  alert("Sorry that is not a valid answer");
}else{
  var firstNumber = parseInt(prompt("Enter A Number: "));
  var secondNumber = parseInt(prompt("Enter Another Number: "));
  maths(mathType, firstNumber, secondNumber);
  alert("The Answer Is: " + answer);
}

//Second Operation Prompt
var response = prompt("Do You Want to Perform Another Operation?").toUpperCase();
  if (response === "YES"){
    //Do you Want To Use Previous Answer in Calculation
    var response2 = prompt("Do You Want to Use Your Previous answer in your calculation?")
    response2 = response2.toUpperCase();
    //If YES
    if (response2 === "YES"){
      mathType = prompt("Your current number is " + answer + ". " + typePrompt).toUpperCase();
      if(mathType !== "ADDITION" && mathType !== "SUBTRACTION" && mathType !== "MULTIPLICATION" && mathType !== "DIVISION"){
        alert("Sorry that is not a valid answer");
      }else{
        var secondNumber = parseInt(prompt("Enter Another Number: "));
        maths(mathType, answer, secondNumber);
        alert("The Answer Is: " + answer);
      }
    //IF NO
    }else{
      mathType = prompt(typePrompt).toUpperCase();
      if(mathType !== "ADDITION" && mathType !== "SUBTRACTION" && mathType !== "MULTIPLICATION" && mathType !== "DIVISION"){
        alert("Sorry that is not a valid answer");
      }else{
        var firstNumber = parseInt(prompt("Enter A Number: "));
        var secondNumber = parseInt(prompt("Enter Another Number: "));
        maths(mathType, firstNumber, secondNumber);
        alert("The Answer Is: " + answer);
      }
    }
  // QUIT OUT
  }else{
    alert("FINE.");
  }

*/
