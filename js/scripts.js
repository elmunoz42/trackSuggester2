////////////////Business End////////////////////
function greetAndventurer(name) {
  var adventurer = prompt("name?");
  var result = "Thanks, " + adventurer + "have a great adventure!";
  alert(result);
}


function pathFinder(parameterA, parameterB) {
  var inputA = "A1";
  var inputB = "B1";
  var result;
  if (inputA === "A3" || inputB === "B3") {
    result = "You should look into C# or Java. NOT THE SAME AS JAVASCRIPT!!!";
  }
  else if (inputA === "A2" || inputA == "A3" || inputB === "B1") {
    result = "You should look into PHP, Ruby or Java. NOT THE SAME AS JAVASCRIPT!!!";
  }
  else if (inputB === "B1" || inputB === "B4") {
    result = "You should look into Ruby or Java. NOT THE SAME AS JAVASCRIPT!!!";
  }
  else if (inputA === "A2" || inputA === "A3" || inputB === "B1") {
    result = "You should look into PHP.";
  }
  else if (inputA === "A1" || inputA === "A2" || inputA === "A3" || inputB === "B1" || inputB === "B2" || inputB === "B4") {
    result = "You should look into Ruby.";
  }
  else if (inputB === "B1" || inputB === "B3" || inputB === "B4") {
    result = "You should look into Java. NOT THE SAME AS JAVASCRIPT!!!";
  }
  else {
    alert("I hate/love jQuery!!!");
  }
  return result;
}
// function suggestedTraining(inputC) {
//
//
// }











//////////////////User Interface//////////////////////
$(document).ready(function() {

alert("Hello Budding Programmer! Please fill out this form and you can learn how to make pop ups like this one, and so much more!");

$("#pathFinderInput").submit(function(event) {
  event.preventDefault();
  var inputA = $("#desired-employment").val();
  var inputB = $("#type-of-code").val();
  var result = pathFinder(inputA, inputB);
  $("#suggestion").text(result);
  alert("Also if you feel inspired join our email list!");
});

greetAndventurer(Steve) ;


});
