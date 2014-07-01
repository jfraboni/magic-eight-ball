Magic Eight Ball
=======================
A simple, but magical node cli app demonstrating handling JSON, prompting 
the user for input, simple regular expressions and other basic JavaScript 
and node features.

# Installation

### On runnable.com:
Create a new node app, and from the terminal, enter or cut and paste the following commands, then press enter or return:
    
    git clone https://github.com/jfraboni/magic-eight-ball.git && cd magic-eight-ball && ./setup.sh && cd - && source .bashrc
    
...some text will fly by as the repository is cloned locally and the project is setup.

Great, you're set to roll!

# Lesson Steps

Open up the magic-eight-ball.js file, and find:

**TODO 1 :** Here, create two variables in the same statement, one named `prompt` which will hold the prompt module, and one named `fs` to hold the file-system module:

```javascript
#!/usr/bin/env node

// TODO 1 : create variables for prompt and fs by calling require in each respective module:
var 
    prompt = require("prompt"),
    fs = require("fs")
    ;
```

Prompt and fs are modules, that is, libraries of code that provide some special functionality that we can reuse.

Think of including modules like including the various parts of a car:  A car is an assembly of parts - we need some headlights, an engine, a battery, wheels, etc, but someone else has constructed them for us, and in this case, prompt allows us to prompt the user for input, and fs, which means "file system", allows us to read and write to files on the computer.

Each module exposes a public API that provides some functionality, like prompting the user - we don't have to know how the prompt module works on the inside, just like we don't have to know how a battery works on the inside to hook it up to a car and make use of it.

To use modules, we state they are required by calling the node require method, like so, `var myModuleInstance = require('my-module')`, which takes a String representing the module and returns the instance of the module.

Notice the formatting of these variable declarations: `var` is on a line by itself, then on the next line and indented, we have the `prompt`, then a comma, new line, indented, then the `fs` declaration, and finally a semi-colon on the last line by itself.  This formatting simply points out that we're listing declarations in the same statement, and provides a cleaner way of looking at the source.

**TODO 2 :** Next, we'll create a variable to hold a welcome message and log it, this will print the welcome message back to the command line:
```javascript
// other code...

// TODO 2 : create a welcomeMessage variable and log the welcomeMessage:
var welcomeMessage = "Magic Eight Ball";
console.log(welcomeMessage);

// other code...
```
Nothing we haven't seen before!

**TODO 3 :** Now let's set up a few more variables:  First an Array to hold our possible answers, and then we'll assemble the full file path to the `answers.json` data that we're about to load.  `__dirname` is a built in node feature that gives us the system-specific path to our current directory, which will be different depending on the machine and operating system, etc, in other words, we certainly wouldn't want to hardcode a full path:

```javascript
// TODO 3 : create two variables, the answers array and the file path to the answers.json:
var answers = [];
var file = __dirname + "/answers.json";
```

**TODO 4 :** Check out this deal: We use a for-in loop to iterate over all the items in the data.answers array (see the structure of that <a href="http://www.json.org/js.html" target="_blank">JSON</a> data in the answers.json data in the same directory).

The for-in loop cycles through all elements in a list (either Array or object), and assigns to the variable just inside the open-parentheses (in this case, we called that variable `index`), the index (in the case of iterating an Array) or the key (in the case of iterating an Object), which we can then use to look up the value at that index or key.  Loops are the mechanism by which you'll process and consume Arrays (lists of things) and other data-sets, so it's best to familiarize yourself with them.

<a href="http://www.w3schools.com/js/js_loop_for.asp" target="_blank">Here's a list of all the loops in JavaScript</a>

```javascript
// TODO 4 : Loop through the data.answers objects, and push answer-records into the answers array:
for (index in data.answers) {
    answers.push(data.answers[index].value);
}
```

Let's take a minute to talk about this crazy method call:

```javascript
fs.readFile(file, "utf8", function (err, data) {
  if (err) { return onErr(err); }

  data = JSON.parse(data);

  // TODO 4 : Loop through the data.answers objects, and push answer-records into the answers array:
  for (index in data.answers) {
      answers.push(data.answers[index].value);
  }

  // TODO 5 : Invoke the promptForQuestion() function:
  
});
```

Here, we're using the readFile API of the fs (file-system) module to load our answers.json file.  Again, we don't need to know too much about what's going on inside, we just need to meet certain requirements, or fulfill a contract outlined by an _interface_.  In this case, the readFile method takes the directory path to the file, which includes the file name.  Next, we set a standard <a href="http://en.wikipedia.org/wiki/UTF-8" target="_blank">utf8 encoding</a>, but don't worry about this for now.  Most interestingly is the next argument, which is an <a href="http://en.wikipedia.org/wiki/Anonymous_function" target="_blank">anonymous function</a>.  This is a pretty powerful pattern that you'll see often in JavaScript and node, were _we pass a function that will be executed once some other process has completed_, in this case, the file has been read.

On load complete, our anonymous function is executed, wherein we use the JSON.parse API to read our JSON string and convert the String to a JavaScript Object structure.  Once parsed, we look inside that Object for an Array of answers, and for this version of the app, we don't care about other any other values in that data except for the value of the answer, so we grab each answer and push it into a simple Array. 

**TODO 5 :** Moving on, now that we've loaded our data, we're ready to rip, so let's prompt the user to ask our magic eight ball a question: invoke the promptForQuestion() method, like so:

```javascript
// other code...

// TODO 5 : Invoke the promptForQuestion() function:
promptForQuestion();

// other code...
```

Let's go over the prompt boilerplate, which we wrote for you:

We create a variable called `properties`, which contains some configuration values for the prompt, including the message we will display to the user on the screen.  Next, we declared a function called `promptForQuestion`; we do this so we can reuse this functionality and show the prompt again without having to rewrite all the code required to do so.  Inside the `promptForQuestion` functino, we call `start` on the `prompt` Object - this initializes the prompt, and then we call `prompt.get` and pass our properties and a callback function, that will handle our user's response.

```javascript
var properties = [
  {
    name: "input", 
    validator: /^[A-Z].+(\?)$/,
    message: "\nAsk the magic eight ball a question>",
    required: true,
    warning: "Whoa now, that doesn\'t seem like a proper question:\nWe must be polite to the magic eight ball,\nso please make certain you start your question with a capital and end it with a question mark.\nFor example, \"Will I win the lottery?\". Try again."
  }
];

function promptForQuestion() {
  prompt.start();

  prompt.get(properties, function (err, input) {
    if (err) { return onErr(err); }

    // TODO 7 : Invoke the showResponse() function, passing in a random index from the answers array:
    
  }); 
}
```

**TODO 6 :** Okay, now let's get the magic eight ball ready to respond: create a function called `showResponse()` that takes one parameter, called `index`.  We log a result by looking up the index, which will be randomly selected, on the answers array:

```javascript
// TODO 6 : Create the showResponse() function:
function showResponse(index) {
  console.log("The Magic Eight Ball responds: " + answers[index]);
}
```

**TODO 7 :** Finally, the moment we've all been waiting for, let's randomly select the magic eight ball's response:

```javascript
// TODO 7 : Invoke the showResponse() function, passing in a random index from the answers array:
showResponse(randomNumberBetween(0, answers.length-1));
```

Here, we're invoking the showResponse() method, and before we do so, as an argument to the showResponse() method, we're passing in the result of another invocation, this one to the randomNumberBetween() method, where we ask for a random number between zero (remember, arrays are zero-indexed, so the first element in the answers array is at index 0) and the last possible index in the answers array, which we calculate by asking for the length of the array, minus one.  Why minus one here?  To offset for the fact, as previously mentioned, that arrays are zero indexed, so if we just took the length of the array as the high end of our range, we'd be out of bounds by one.

Go ahead and run the app, but be very careful what you ask for!
