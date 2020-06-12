$(document).ready(function() {
  $('form#inputForm').submit(function(event) {
    event.preventDefault();
    let inputArray = []

    inputArray.push($('input#userInput').val())
    console.log(inputArray)
    
    let outputArray = mrRoboger(inputArray)
    console.log('This is the Output', + outputArray)

    $('#result').text(outputArray);
  })
})





    //////////////////////////////////
    /// User Interface Logic Above ///
    //////////////////////////////////
    
    /////////////////////////////////
    ///   Business Logic Below.   ///
    /////////////////////////////////
    
    function mrRoboger(number) {
      let functionArray = []
      for(let index = 0; index <= number; index++) {
        console.log(index);
        functionArray.push(index)
      }
    
      console.log(functionArray)
    return functionArray
    }




//     var userInput = $('input#userInput').val();
//     console.log(userInput + ' this is userInput prefunction')

//     roboResult = mrRoboger(userInput)
//     $('#result').text(mrRoboger(userInput));
//   });
// 
