/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
 var board = new Board({'n':n})
  var solution = board.rows();
  for(var i = 0; i < n; i++) {
    board.togglePiece(i, i);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n})
  //var solution = board.rows();
  var solutionCount = 0;
  var placeRookRecursively = function(rowIndex, colIndex) {
    if(rowIndex === n) {
      solutionCount++;
      return;
    } else {
      for(var i = 0; i < n; i++) {
        board.togglePiece(rowIndex, i);
        if(!board.hasAnyRooksConflicts()) {
          placeRookRecursively(rowIndex + 1, 0);
        }
        board.togglePiece(rowIndex, i);
      }
    }
  }
  placeRookRecursively(0, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n':n})
  var solution = board.rows();
  solutionFound = false;
  var placeQueenRecursively = function(rowIndex) {
    if(rowIndex === n) {
      solutionFound = true;
      return;
    } else {
      for(var i = 0; i < n; i++) {
        board.togglePiece(rowIndex, i);
        if(!board.hasAnyQueensConflicts()) {
          placeQueenRecursively(rowIndex + 1, i);
        }
        if(solutionFound) {
          break;
        }
        board.togglePiece(rowIndex, i);  
      }
    }
  }
  placeQueenRecursively(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n})
  var solutionCount = 0;
  var placeQueenRecursively = function(rowIndex) {
    if(rowIndex === n) {
      solutionCount++;
      return;
    } else {
      for(var i = 0; i < n; i++) {
        board.togglePiece(rowIndex, i);
        if(!board.hasAnyQueensConflicts()) {
          placeQueenRecursively(rowIndex + 1, i);
        }
        board.togglePiece(rowIndex, i);      
      }
    }
  }
  placeQueenRecursively(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
