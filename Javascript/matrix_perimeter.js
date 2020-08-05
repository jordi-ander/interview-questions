/* Return the sum of the perimeter of the matrix */
const matrix = [
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1]
];
//Another way to look at the matrix is:
//const matrix = [ [1, 1, 1, 1] ,[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1] ];

function sumOfPerimeter(matrix){
	var rows = matrix.length;
	var columns = matrix[0].length;

	var sum = 0;
	//Add the values of the perimeter arrays (first and last arrays)
	sum += matrix[0].reduce((total, index) => total + index);
	sum += matrix[rows - 1].reduce((total, index) => total + index);

	//add the perimeter values from the interior arrays (first and last values)
	for(var index in matrix) {
		if ((index < (rows - 1)) && (index > 0)){
			sum += matrix[index][0] + matrix[index][columns - 1];
		};
	};
	return sum;
}