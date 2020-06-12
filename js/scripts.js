$(document).ready(function() {
  $('form#inputForm').submit(function(event) {
    event.preventDefault();
    let finalArray = [];
    let userNumberInput = 0;

    userNumberInput = $('input#userInput').val();

    finalArray = mrRoboger(userNumberInput);

    $('#result').text(finalArray);
  })
})
  //////////////////////////////////
 /// User Interface Logic Above ///
//////////////////////////////////

  /////////////////////////////////
 ///   Business Logic Below.   ///
/////////////////////////////////


function mrRoboger(number) {
  let returnArray = [];

  for (let index = 0; index <= number; index++) {
    if (index.toString().includes("3")) {
      returnArray.push("Will you be my neighbor?");

    } else if (index.toString().includes("2")) {
      returnArray.push("Boop!");

    } else if (index.toString().includes("1")) {
      returnArray.push("Beep!");

    } else {
      // console.log(index + " this is the end of the function");
      returnArray.push(index);
    }
  }
  console.log(returnArray);
  return returnArray
}