/*function concat(array1, array2){
  var array3 = array1.concat(array2);
  return array3;
}
*/
function concat(arrayOne, arrayTwo) {
  for (var i = 0; i < arrayTwo.length; i++) {
    arrayOne.push(arrayTwo[i]);
  } return arrayOne;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);