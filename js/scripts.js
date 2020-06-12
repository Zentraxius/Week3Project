$(document).ready(function() {
  $('form#inputForm').submit(function(event) {
    event.preventDefault();

    const userInput = $('input#userInput').val();
    console.log(userInput + ' this is userInput prefunction')

    const robogerReply = mrRoboger($("input#userInput").val());
    console.log(robogerReply);

    $('#result').text(mrRoboger(userInput));
  });
});

  //////////////////////////////////
 /// User Interface Logic Above ///
//////////////////////////////////

  /////////////////////////////////
 ///   Business Logic Below.   ///
/////////////////////////////////

function mrRoboger(number) {
  let x  = number

  for (let i = 0; i <= x; i++) {

  if (i.toString().includes('5')) {

    console.log('contains 5');

  } else {

    console.log(i + ' else');
  }
}
}

//// Need to get function to take user input


// function mrRoboger(str) {
//   let x  = 50;

// for (let i = 0; i <= x; i++) {
//   if (i.toString().includes('5')) {
//     console.log('contains 5');
//   } else {
//     console.log(i);
//   }
// }

// }

/////////////////////////////
// Convert Number into String
// Use check index of in a LOOP 
// output -> ID = #result
// input = ID -> #userInput