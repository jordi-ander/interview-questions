//Find the single missing number in an unordered array that will hold values, [1, 100], inclusively
// const arr = [1, ..., 100]

function findMissingNum(arr){
	arr.sort((a, b) => a - b); // get a sorted array
	for (var i = 0; i < arr.length; i++){
		if(arr[i] !== i+1){
			return i+1;
		}
	}
}


// Optimized

function findMissingNumOpt(arr){
	var len = arr.length;
	var total = len * (len + 1) /2; //This is how you find the total of 0 - length inclusive
	var arrTotal = arr.reduce((acc, i) => acc + i);
	return total - arrTotal;
}