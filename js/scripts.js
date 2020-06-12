

    $(document).ready(function() {
      $('form#inputForm').submit(function(event) {
        event.preventDefault();

        let finalArray = [];
        let userNumberInput = 0;
    
        userNumberInput = $('input#userInput').val();
        console.log(userNumberInput)
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
      let functionArray = []
      
      for(let index = 0; index <= number; index++) {
        if(index.toString().includes('3')) {
          functionArray[index] = 'Will you be my neighbor?'
          
        } else if (index.toString().includes('2')) {
           functionArray[index] = "Boop!"

          } else if (index.toString().includes('1')) {
            functionArray[index] = "Beep!"
            
          } else {
            console.log(index + ' this is the end of the function');
            functionArray[index].push(index)
          }
          
        }
        console.log(functionArray)
        return functionArray
      }
      


