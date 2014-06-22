#!/usr/bin/env node

// TODO 1 : create variables for prompt and fs by calling require in each respective module:


// TODO 2 : create a welcomeMessage variable and log the welcomeMessage:


// TODO 3 : create two variables, the answers array and the file path to the answers.json:


fs.readFile(file, 'utf8', function (err, data) {
  if (err) { return onErr(err); }

  data = JSON.parse(data);

  // TODO 4 : Loop through the data.answers objects, and push answer-records into the answers array:
  

  // TODO 5 : Invoke the promptForQuestion() function:
  
});

var properties = [
	{
    name: 'input', 
    validator: /^[A-Z].+(\?)$/,
    message: '\nAsk the magic eight ball a question>',
    required: true,
    warning: 'Whoa now, that doesn\'t seem like a proper question:\nWe must be polite to the magic eight ball,\nso please make certain you start your question with a capital and end it with a question mark.\nFor example, \"Will I win the lottery?\". Try again.'
	}
];

function promptForQuestion() {
	prompt.start();

	prompt.get(properties, function (err, input) {
		if (err) { return onErr(err); }

    // TODO 7 : Invoke the showResponse() function, passing in a random index from the answers array:
    
	});	
}

// TODO 6 : Create the showResponse() function:


function randomNumberBetween(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function onErr(err) {
	console.log('Error: ' + err);
	return 1;
}


 