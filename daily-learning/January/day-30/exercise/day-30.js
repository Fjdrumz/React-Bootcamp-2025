<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Rock-Paper-Scissors</title>
  </head>
  <body>
    
        <p>Rock-Paper-Scissors</p>
        <button onclick="
           playGame('rock');
        ">Rock</button>




        <button onclick="
              playGame('paper');
            "
        >Paper</button>


        <button
        onclick="
            playGame('scissors');
        "
        >Scissors</button>

    <script>
            
            function playGame(playerMove){
                const computerMove = pickComputerMove();

                    let result = '';
                    if(playerMove === 'scissors'){
                        if(computerMove === 'Rock'){
                        result = 'You loose';
                        }else if (computerMove === 'Paper'){
                            result = 'You win'; 

                        }else if (computerMove === 'Scissors'){
                            result = 'Tie';
                        }


                    }else if (playerMove === 'paper'){
                        if(computerMove === 'Rock'){
                            result = 'You win';
                        }else if (computerMove === 'Paper'){
                            result = 'Tie'; 

                        }else if (computerMove === 'Scissors'){
                            result = 'You loose';
                        }


                         
                    }else if(playerMove === 'rock'){
                        if(computerMove === 'Rock'){
                            result = 'Tie';
                        }else if (computerMove === 'Paper'){
                            result = 'You loose'; 

                        }else if (computerMove === 'Scissors'){
                            result = 'You win';
                        }
                    }
                  
                    alert(You picked ${playerMove}. Computer picked ${computerMove}. ${result});
            }





            function pickComputerMove (){
                const randomNumber = Math.random();
              
                let computerMove = '';


                if(randomNumber >= 0  && randomNumber < 1/3){
                    computerMove = 'Rock';
                }else if(randomNumber >= 1/3 && randomNumber < 2/3){
                    computerMove = 'Paper';
                }else if (randomNumber >= 2/3 && randomNumber < 1){
                    computerMove = 'Scissors';
                }


                return computerMove;
            }

            function greet(name = 'hi there'){
                console.log(Hello, ${name});
            }
           greet();


           function convertToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
      }

      function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }

      function convertTemperature(degrees, unit) {
        if (unit === 'C') {
          const result = convertToFahrenheit(degrees);
          return ${result}F;
        } else if (unit === 'F') {
          const result = convertToCelsius(degrees);
          return ${result}C;
        }
      }

      console.log(convertTemperature(25, 'C'));
      console.log(convertTemperature(86, 'F'));
    </script>
  </body>
</html>