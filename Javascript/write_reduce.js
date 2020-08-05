//Write your own reduce. Make sure it can take the second parameter
//EX reduce((c, v) => c + v, 2))

Array.prototype.combine = function(acc, initValue){
	var index;
	var res;

	if (initValue || typeof initValue !== 'undefined'){
		index = 1;
		res = this[0] + initValue;
	} else {
		index = 0;
		res = 0;
	}

	for(var i = index; i < this.length; i++){
		res += this[i];
	}
	return res;
}

//Test

var arr = [2, 3, 4]; // Should return 9
console.log(arr.combine((acc, i) => acc + i));
