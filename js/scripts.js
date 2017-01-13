////////////////Business End////////////////////
// function greetAndventurer(name) {
//
// }


function pathFinder(inputA,inputB) {
  var inputA = prompt("A");
  var inputB = prompt("B");
  var result;
  if (inputA === "A3" || inputB === "B3") {
    alert("You should look into C# or Java. NOT THE SAME AS JAVASCRIPT!!!");
  }
  else if (inputA === "A2" || inputA == "A3" || inputB === "B1") {
    alert("You should look into PHP, Ruby or Java. NOT THE SAME AS JAVASCRIPT!!!");
  }
  else if (inputB === "B1" || inputB === "B4") {
    alert("You should look into Ruby or Java. NOT THE SAME AS JAVASCRIPT!!!");
  }
  else if (inputA === "A2" || inputA === "A3" || inputB === "B1") {
    alert("You should look into PHP.");
  }
  else if (inputA === "A1" || inputA === "A2" || inputA === "A3" || inputB === "B1" || inputB === "B2" || inputB === "B4") {
    alert("You should look into Ruby.");
  }
  else if (inputB === "B1" || inputB === "B3" || inputB === "B4") {
    alert("You should look into Java. NOT THE SAME AS JAVASCRIPT!!!");
  }
  else {
    alert("I hate/love jQuery!!!");
  }
  return result;
}
function suggestedTraining(inputC) {


}











//////////////////User Interface//////////////////////
$(document).ready(function() {

alert("Hello Budding Programmer! Please fill out this form and you can learn how to make pop ups like this one, and so much more!");

pathFinder();




})
