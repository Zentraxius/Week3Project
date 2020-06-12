$(document).ready(function() {
  $('form#inputForm').submit(function(event) {
    event.preventDefault();
    let finalArray = [];
    let numberArray = [];
    let userNumberInput = 0;

    userNumberInput = $('input#userInput').val();
    console.log(userNumberInput + ' this is userNumberInput')

    numberArray = robogerArray(userNumberInput);
console.log(numberArray + ' this is numberArray')

    finalArray = mrRoboger(numberArray, userNumberInput);
console.log(finalArray + ' this is finalArray')

    $('#result').text(finalArray);
  })
})
  //////////////////////////////////
 /// User Interface Logic Above ///
//////////////////////////////////

  /////////////////////////////////
 ///   Business Logic Below.   ///
/////////////////////////////////

function robogerArray(number) {
  let functionArray = [];
  for (let i = 0; i <= number; i++) {
    functionArray.push(i);
  }
  return functionArray;
}

function mrRoboger(numberArray, number) {
  let functionArray = numberArray;

  for (let index = 0; index <= number; index++) {
    if (index.toString().includes("3")) {
      functionArray[index] = "Will you be my neighbor?";

    } else if (index.toString().includes("2")) {
      functionArray[index] = "Boop!";

    } else if (index.toString().includes("1")) {
      functionArray[index] = "Beep!";

    } 
  }
  console.log(functionArray);
  return functionArray;
}
