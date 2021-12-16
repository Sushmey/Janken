function play(playerInput,computerInput)
{
	if(playerInput==computerInput.toLowerCase())
	{
		return `Computer chose ${computerInput}, Draw!`;
	}
	else if(playerInput=="rock" && computerInput.toLowerCase()=="scissor")
	{
		return "Computer chose Scissor, Player wins!";
	}
	else if(playerInput=="scissor" && computerInput.toLowerCase()=="paper")
	{
		return "Computer chose Paper, Player wins!";
	}
	else if(playerInput=="paper" && computerInput.toLowerCase()=="rock")
	{
		return "Computer chose Rock, Player wins!";
	}
	else if(playerInput=="scissor" && computerInput.toLowerCase()=="rock")
	{
		return "Computer chose Rock, Computer wins!";
	}
	else if(playerInput=="paper" && computerInput.toLowerCase()=="scissor")
	{
		return "Computer chose Scissor, Computer wins!";
	}
	else if(playerInput=="rock" && computerInput.toLowerCase()=="paper")
	{
		return "Computer chose Paper, Computer wins!";
	}
	else
	{
		return "Invalid Input";
	}
}

var playerInput;
possibleInputs = ['Rock','Paper','Scissor']
var computerInput;
function input(){
	playerInput = document.getElementById("choice").value;
	playerInput = playerInput.toLowerCase();
	computerInput = possibleInputs[Math.floor(Math.random()*3)];
	if(playerInput=="") 
	{
		document.getElementById("output").innerHTML = "Choice can't be null!";
		console.log("Choice can't be null!");
	}
	else 
	{
		var temp = play(playerInput,computerInput);
		document.getElementById("output").innerHTML = temp;
		console.log(temp);
	}
}
	








