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

Notice the formatting of these variable declarations: var is on a line by itself, then on the next line and indented, we have the prompt 
