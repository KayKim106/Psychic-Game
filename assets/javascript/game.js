const letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","v","w","x","y","z"];
	// generate random number based on the letters's range so it has a number 
	let letterIndex = Math.floor(Math.random()*letters.length);
	//computer choice
	let computerChoice = letters[letterIndex];
	// user input and returns it to input id
	let userInput = document.querySelector("#input");
	//storing space for the user input
	let inputArr = [];
	//for containing all the input values 
	let wins=0;
	let losses=0;
	let chance=9;
	alert("Let the game begins !");
	alert("Guess what letter I'm thinking!")

			function reset(){
				chance=9;
				//reseting attempting chance
				inputArr.length=0;
				//clearing the Array's values
			}

			window.addEventListener('keyup', function(event){
				
				inputArr.push(event.key);

				//pushing new event.key to inputArr arr	alert(inputArr);//returning all the inputArr's values 
			/**/
				

			document.getElementById("input").innerHTML =inputArr;
				//printing out inputArr array on web
			if(userInput == computerChoice || inputArr[0] == computerChoice || inputArr[1]==computerChoice || inputArr[2] == computerChoice || inputArr[3]==computerChoice || inputArr[4]==computerChoice || inputArr[5]==computerChoice || inputArr[6]==computerChoice || inputArr[7]==computerChoice || inputArr[8]==computerChoice)
			{	//comparing with user input and computerChoice, if anything is equal to computerChoice then win++
				alert("right!!");
				wins ++;
				reset();
			}
			else if(computerChoice.indexOf(userInput)=== -1)
			{
				alert("Wrong!!");
				chance--;
				
				if(chance<1){
					alert("Game over");
					losses++;
					reset();
					alert("When you press any button, Game will be restarted");
				}
			}
			
			
		 var html =
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Chance : " + chance + "</p>" ;        
          document.querySelector("#game").innerHTML = html;
	});

