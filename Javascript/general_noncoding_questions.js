/* What is the difference between the following */
function x() {

}

let x = function(){

}


/*
ANSWER
- The first is function DECLARATION and the second is funciton EXPRESSION
- Declaration are loaded before any code can run, so if this function is used "above
		where it's written in code". Function expressions are loaded when the interpreter
		reached that line in code
- Function expressions are not hoisted "to the top" of code and can keep a copy of local
		variables from the scope where they were defined. Declarations are hoisted (similar
		to the var statement)
- FE are useful for closures, as arguments to other functions, and as IIFE
*/




/* Console.log(x()) will return undefined here when trying to return an object. Why? */
let x = function() {
	return
  	{
  		message: 'hi'
  	}
}


/*
ANSWER
  Return should not have a line break. This makes them separate. So you're returning nothing
  essentially. That's happening is because you don't need to add a semicolon, one is getting
  place at the end of line 28 automatically and making the return and the following block of 
  code separate.
  Fix it by doing the follwing:
 */

let x = function() {
	return {
		message: 'hi';
	}
}