/* Reserve a string */

String.prototype.reverse = function(){
	var strArr = Array.from(this);
	var newStr = [];
	for(var i = strArr.length - 1; i >= 0; i--){
		newStr.push(strArr[i])
	}
	return newStr.join('');
}

/* Reverse the string in one line */

str.split('').reverse().join('');