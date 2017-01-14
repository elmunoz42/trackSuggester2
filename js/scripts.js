////////////////Business End////////////////////
function greetAndventurer(name) {
  var adventurer = name;
  var result = "Thanks " + adventurer + ", have a great adventure!";
  return result;
  alert(result);
}


function pathFinder(parameterA, parameterB) {
  var inputA = parameterA;
  var inputB = parameterB;
  var result;
  if (inputA === "A3" || inputB === "B3") {
    result = "You should look into C# or Java.";
  }
  else if (inputA === "A2" || inputA == "A3" || inputB === "B1") {
    result = "You should look into PHP, Ruby or Java.";
  }
  else if (inputB === "B1" || inputB === "B4") {
    result = "You should look into Ruby or Java.";
  }
  else if (inputA === "A2" || inputA === "A3" || inputB === "B1") {
    result = "You should look into PHP.";
  }
  else if (inputA === "A1" || inputA === "A2" || inputA === "A3" || inputB === "B1" || inputB === "B2" || inputB === "B4") {
    result = "You should look into Ruby.";
  }
  else if (inputB === "B1" || inputB === "B3" || inputB === "B4") {
    result = "You should look into Java.";
  }
  else {
    alert("I hate/love jQuery!!!");
  }
  return result;
}












//////////////////User Interface//////////////////////
$(document).ready(function() {

alert("Hello Budding Programmer! Please fill out this form and you can learn how to make pop ups like this one, and so much more!");

$("#pathFinderInput").submit(function(event) {
  event.preventDefault();
  var inputA = $("#desired-employment").val();
  var inputB = $("#type-of-code").val();
  var result = pathFinder(inputA, inputB);
  $("#suggestion").text(result);
  alert("Drum roll please .   .   .   .   .  .  .  . . . . . .. . .......................")
  alert("One more thing! If you feel inspired join our email/github list!");
  $("ul").show();
});

$("#intakeForm").submit(function(event) {
  event.preventDefault();
  var adventurer = $("#name").val();
  console.log("adventurer:" + adventurer);
  var result = greetAndventurer(adventurer);
  console.log("result:" + result)
  $("#adventure").text(result);
});


});
