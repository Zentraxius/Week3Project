$(document).ready(function() {
  $('form#inputForm').submit(function(event) {
    event.preventDefault();
    let inputArray = []

    inputArray.push($('input#userInput').val())
    console.log(inputArray)
  })
})





    //////////////////////////////////
    /// User Interface Logic Above ///
    //////////////////////////////////
    
    /////////////////////////////////
    ///   Business Logic Below.   ///
    /////////////////////////////////
    
    function mrRoboger(number) {
      let numberArray = []
      
    }




//     var userInput = $('input#userInput').val();
//     console.log(userInput + ' this is userInput prefunction')

//     roboResult = mrRoboger(userInput)
//     $('#result').text(mrRoboger(userInput));
//   });
// 
