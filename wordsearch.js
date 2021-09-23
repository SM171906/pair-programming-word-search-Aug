const transpose = function(matrix) {

    const nRows = matrix[0].length;
    const nCols = matrix.length;
  
    let transposedArray = [];
    
    for (let i = 0; i < nRows; i++) {
      let tempArray = Array(nCols).fill(0);
      for (let j = 0; j < nCols; j++) {
        let temp = matrix[j][i];
        tempArray[j] = temp;
      }
      transposedArray.push(tempArray);
    }
    return transposedArray;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word))
        { 
            return true
        } 
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word))
        { 
            return true
        } 
    } 
    return false;
}

module.exports = wordSearch;






 