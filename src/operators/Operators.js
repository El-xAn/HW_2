//function check(a, b) {
//  if (a % 2 == 0) {
//      return a * b;
//  } else {
//      return a + b;
//  }
//}
//
//console.log(check1(5, 3));


//function coordinates(x, y) {
//    if (x > 0 && y > 0) {
//    return 'The point belongs 1st quarter.';
//    } else if (x < 0 && y > 0) {
//    return 'The point belongs 2nd quarter.';
//    } else if (x < 0 && y < 0) {
//    return 'The point belongs 3rd quarter.';
//    } else if (x > 0 && y < 0) {
//    return 'The point belongs 4th quarter.';
//    } else if (x == 0) {
//        return 'The point is on the ordinate axis.';
//    } else if(y == 0) {
//        return 'The point is on the absis axis.';
//    }
//}
//
//console.log(coordinates(2, 3));


//function sumsPositive(a, b, c) {
//  if (a < 0 ) {
//       a = 0;
//  }
//  if (b < 0 ) {
//       b = 0;
//  }
//  if (c < 0 ) {
//      c = 0;
//  }
//
//  return a + b + c;
//}
//
//console.log(sumsPositive(-1, 2, 3));


//function calcMax(a, b, c) {
//  if ((a * b * c) > (a + b + c)) {
//      console.log(a * b * c + 3);
//  } else if ((a * b * c) < (a + b + c)) {
//       console.log(a + b + c + 3);
//  } else {
//      console.log('Expressions are equal.');
//  }
//}
//
//calcMax(1, 1, 1 );


function rating(grade) {
    if(grade >= 0 && grade < 20){
        return 'F';
    } else if(grade >= 20 && grade < 40) {
        return 'E';
    } else if(grade >= 40 && grade < 60) {
        return 'D';
    } else if(grade >= 60 && grade < 75) {
        return 'C';
    } else if(grade >= 75 && grade < 90) {
        return 'B';
    } else if(grade >= 90 && grade < 100) {
        return 'A';
    }
}

module.exports = { rating };