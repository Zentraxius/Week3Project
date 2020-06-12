$(document).ready(function() { // Start your engines
  $('form#inputForm').submit(function(event) { // Click the submit on the form!
    event.preventDefault(); // This keeps it from breaking? 

    let finalArray = []; // Set the array to empty!
    let userNumberInput = 0; // Yep, that's a number
    userNumberInput = $('input#userInput').val(); // Setting the number = to userInput from the form

    finalArray = mrRoboger(userNumberInput); // This runs the number through the function and returns it as finalArray

    $('#result').text(finalArray); // This displays finalArray in Mr Robogers language
  })
})
  //////////////////////////////////
 /// User Interface Logic Above ///
//////////////////////////////////

  /////////////////////////////////
 ///   Business Logic Below.   ///
/////////////////////////////////


function mrRoboger(number) { // Function name and its parameter
  let returnArray = []; // Sets the array to empty, ready for use!

  for (let index = 0; index <= number; index++) { // Loops are EVIL but it works
    if (index.toString().includes("3")) { // If the index were to be converted to a string, would it contain a 3?
      returnArray.push("Will you be my neighbor?"); // If the above is true, pushes the string "Will you be my neighbor?" in place of the index

    } else if (index.toString().includes("2")) { // If this index was a string, does it have a 2 in it?
      returnArray.push("Boop!"); // If the above is true, push "Boop!" in its place.

    } else if (index.toString().includes("1")) { // If this contains a 1 in string form then->
      returnArray.push("Beep!"); // Replace it with "Beep!"

    } else {
      returnArray.push(index); // If it doesn't meet any of the above, BACK you go!
    }
  }
  return returnArray // Send home for use!
}