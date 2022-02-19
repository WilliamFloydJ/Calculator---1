const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	
	
	if ('Adding',mathSymbol == "+"){
		console.log(num1+num2);
	}
	if ('Subtracting',mathSymbol == "-"){
		console.log(num1-num2);
	}
	if ('Deviding',mathSymbol == "/"){
		console.log(num1/num2);
	}
	if ('Multiplying',mathSymbol == "*"){
		console.log(num1*num2);
	}
	if ('Square Root',mathSymbol == "V"){
		if(isNaN(num2)){
			console.log(Math.sqrt(num1));
		}
		else{
			console.log(Math.sqrt(num1 + num2));
		}
		
	}
	// This line closes the connection to the command line interface.
	reader.close()

});
