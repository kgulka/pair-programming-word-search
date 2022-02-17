
//create a function that takes a matrix and transpose it
//Input: array of arrays (matrix)
//output: the transposed array
const transpose = function(matrix) {
  // Put your solution here
  // loop through each element of the first array
  // loop through each element of element arrays
  let outArray = [];
  //switch the length of rows and cols for the new array.
  for (let i = 0; i < matrix[0].length; i++) {
    outArray.push([]);
    for (let j = 0; j < matrix.length; j++) {
      outArray[i].push(matrix[j][i]);
    }
  }
  return outArray;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  //console.log("hz:", horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const array = transpose(letters);
  const verticalJoin = array.map(x => x.join(''));
  //console.log("hz:", horizontalJoin);
  for (let y of verticalJoin) {
    if (y.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
