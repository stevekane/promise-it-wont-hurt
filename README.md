# Promises Workshop for Javascript!

### Learn to wield promises like a master to write clean asynchronous code

#### Uses the popular "Q" library as a default implementation of Promises/A+

## Mission

Promises offer a very powerful abstraction for obtaining values asynchronously.  
As javascript is a async-first language it is important to understand the options
you have for handling asynchronicity.  

You will learn the ins and outs of promises including error handling, value propagation,
synchronous returns, and composition.

By the end of the workshop you will be comfortable using Q to work with promises
AND writing your own functions that leverage promises to provide clean abstractions
and error handling.

## Installation & Update

Create a new directory to do your workshop work in.  Let's call it "promise-shop".
You will need to initialize npm in this repo and then use npm to install "q".

```
$ mkdir promise-shop && cd promise-shop
$ npm init
$ npm install q
$ npm install -g promise-it-wont-hurt@latest
```

**Note**: the workshop is being updated weekly. 
Please regularly rerun the above command to get the latest set of exercises.

## Usage Instructions

#### 1. Selecting a problem to work on

Once the workshop is installed, run `promise-it-wont-hurt` to print a menu
where you can select a problem to work on.

```
$ promise-it-wont-hurt
```

Problems are listed in rough order of difficulty. You are advised to complete them in order, as later problems
will build on skills developed by solving previous problems.

#### 2. Writing your solution

Once you have selected a problem, the workshop will remember which problem you are working on. 
Using your preferred editor, simply create a file to write your solution in.

#### 3. Testing your solution

Use the workshop's `run` command to point the workshop at your solution file. Your solution will loaded 
and passed the problem input. This usually won't perform any validation, it will only show the program output.

```
$ promise-it-wont-hurt run mysolution.js
```
 
#### 4. Verifying your solution

Your solution will be verified against the output of the 'official' solution. 
If all of the output matches, then you have successfully solved the problem!

```
$ promise-it-wont-hurt verify mysolution.js
```

## Stuck?

Feedback and critisism is welcome, please log your troubles in [issues](https://github.com/stevekane/promise-it-wont-hurt/issues). 

## Screenshots
![Promise it won't hurt](https://raw.github.com/stevekane/promise-it-wont-hurt/master/promiseitwonthurt.png)

## Resources

## Thanks rvagg

This tutorial was built using rvagg's [workshopper](https://github.com/rvagg/workshopper) framework.

## Licence

MIT
