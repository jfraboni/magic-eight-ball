Node.js : Magic Eight Ball : Lesson
=======================
A simple, but magical node cli app demonstrating handling JSON, prompting 
the user for input, simple regular expressions and other basic JavaScript 
and node features.

# Installation:

### On runnable.com:
Create a new node app, and from the terminal, enter or cut and past the following commands:

    git clone https://github.com/jfraboni/node-magic-eight-ball-lesson.git

...some text will fly by as the repository is cloned locally, then enter or cut and paste:

    cd node-magic-eight-ball-lesson && ./setup.sh && cd -

###On your local computer:
Open a terminal in the directory into which you want to clone the repository, then enter or cut and pate the following command:

    git clone https://github.com/jfraboni/node-magic-eight-ball-lesson.git  

...some text will fly by as the repository is cloned locally, then enter or cut and paste:

    cd node-magic-eight-ball-lesson && ./setup.sh
    
Great, you're set to roll!

# Lesson Steps:

Open up the magic-eight-ball.js file, and find:

**TODO 1 :** Here, create to variables in the same statement, one named prompt which will hold the prompt module, and one named fs to hold the file-system module:
```javascript
#!/usr/bin/env node

// TODO 1 : create variables for prompt and fs by calling require in each respective module:
var 
    prompt = require('prompt'),
    fs = require('fs')
    ;
```
Prompt and fs are modules, that is, libraries of code that provide some special functionality that we can reuse.  Think of including modules like assemblying the parts of a car, we need some headlights, an engine, a battery, wheels, etc, but someone else has constructed them for us, and in this case, prompt allows us to prompt the user for input, and fs, which means "file system", allows us to read and write to files on the computer.  Each module exposes a public API that provides some functionality, like prompting the user - we don't have to know how the prompt module works on the inside, just like we don't have to know how a battery works on the inside to hook it up to a car and make use of it.

To use modules, we state they are required by calling the node require method, like so, `var myModuleInstance = require('my-module')`, which takes a string representing the module and returns the instance of the module.

Notice the formatting of these variable declarations: var is on a line by itself, then on the next line and indented, we have the prompt, then a comma, new line, indented, then the fs declaration, and finally a semi-colon on the last line by itself.  This formatting simply points out that we're listing declarations in the same statement, and is a cleaner way of looking at the source.

**TODO 2 :** Next, we'll create a variable to hold a welcome message and log it, this will print the welcome message back to the command line:
```javascript
// other code...

// TODO 2 : create a welcomeMessage variable and log the welcomeMessage:
var welcomeMessage = "Magic Eight Ball";
console.log(welcomeMessage);

// other code...
```
Nothing we haven't seen before!

**TODO 3 :** Now let's set up a few more varialbes:  First an array to hold our possible answers, and then we'll assemble the full file path to the answers.json data that we're about to load.  __dirname is a built in node feature that gives us the system-specific path to our current directory, which will be different depending on the machine and operating system, etc, in otherwords, we certainly wouldn't want to hardcode a full path:

```javascript
// TODO 3 : create two variables, the answers array and the file path to the answers.json:
var answers = [];
var file = __dirname + '/answers.json';
```

**TODO 4 :** Check out this deal: We use a for-in loop to iterate over all the items in the data.answers array (see the structure of that json data in the answers.json data in the same directory).

The for-in loop cycles through all elements in a list (either array or object), and pulls out and to the variable just inside the open-parentheses (in this case, we called that variable "index"), it assigns the index (in the case of iterating an array) or the key (in the case of iterating an object).  Loops are the mechanism by which you'll process and consume arrays (lists of things) and other datasets, so it's best to familiarize yourself with them.  Here's a list of all the loops in JavaScript: http://www.w3schools.com/js/js_loop_for.asp

```javascript
// TODO 4 : Loop through the data.answers objects, and push answer-records into the answers array:
for (index in data.answers) {
    answers.push(data.answers[index].value);
}
```

Let's talk about this crazy method call:

```javascript
fs.readFile(file, 'utf8', function (err, data) {
  if (err) { return onErr(err); }

  data = JSON.parse(data);

  // TODO 4 : Loop through the data.answers objects, and push answer-records into the answers array:
  for (index in data.answers) {
      answers.push(data.answers[index].value);
  }

  // TODO 5 : Invoke the promptForQuestion() function:
  
});
```

**TODO 5 :** Moving on, now that we've loaded our data, we're ready to rip, so let's prompt the user to ask our magic eight ball a question: invoke the promptForQuestion() method, like so:

```javascript
// other code...

// TODO 5 : Invoke the promptForQuestion() function:
promptForQuestion();

// other code...
```

Let's go over the prompt boilerplate, which we wrote for you: 

**TODO 6 :** Okay, now let's get the magic eight ball ready to respond: create a function called showResponse() that takes one parameter, called index.  We log a result by looking up the index, which will be randomly selected, on the answers array:

```javascript
// TODO 6 : Create the showResponse() function:
function showResponse(index) {
  console.log('The Magic Eight Ball responds: ' + answers[index]);
}
```

** TODO 7 :** Finally, the moment we've all been waiting for, let's randomly select the magic eight ball's response:

```javascript
// TODO 7 : Invoke the showResponse() function, passing in a random index from the answers array:
showResponse(randomNumberBetween(0, answers.length-1));
```

Here, we're invoking the showResponse() method, and before we do so, as an argument to the showResponse() method, we're passing in the result of another invokation, this one to the randomNumberBetween() method, where we ask for a random number between zero (remember, arrays are zero-indexed, so the first element in the answers array is at index 0) and the last possible index in the answers array, which we calculate by asking for the length of the array, minus one.  Why minus one here?  To offset for the fact, as previously mentioned, that arrays are zero indexed, so if we just took the length of the array as the high end of our range, we'd be out of bounds by one.

Go ahead and run the app, but be very careful what you ask for!

