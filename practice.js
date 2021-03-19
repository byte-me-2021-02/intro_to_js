// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);




// Write a method that prints out every number from 1 to 100. 

function oneToOneHundred() {
  var i = 0;
  while (i < 100) {
    console.log(i + 1);
    i++;    
  }
}

// oneToOneHundred();

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function everyOther() {
  var i = 1;

  while (i < 100) {
    console.log(i);
    i += 2;
  }
}

// everyOther();


// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
function countOf55s(array) {
  var count = 0;
  array.forEach(function(number) {
    if (number === 55) {
      count++;
    }
  });
  return count;
}


// console.log(countOf55s([1,2,3,4,55,55,55,6,7,8]));
// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

function awesomesauced(strings) {
  var finalArray = [];
  strings.forEach(function(string) {
    finalArray.push(string);
    finalArray.push("awesomesauce");
  })
  finalArray.pop();
  return finalArray;
}

// console.log(awesomesauced(["a", "b", "c", "d", "e"]));

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

// JSON
// var itemAmounts = {chair: 5, table: 2}
// // console.log(itemAmounts["chair"]);
// itemAmounts.chair = 3;

// console.log(itemAmounts);


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}

// var itemAmounts = {chair: 5, table: 2};

// // itemAmounts.desk = 7
// itemAmounts["desk"] = 7;

// console.log(itemAmounts);

// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number) {
  var product = 1;
  while (number > 0) {
    product *= number;
    number--;
  }
  return product;
}

// console.log(factorial(5));

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].


function allSums(numbers1, numbers2) {
  var finalArray = [];
  console.log(numbers1, numbers2);
  numbers1.forEach(function(number1) {
    numbers2.forEach(function(number2) {
      finalArray.push(number1 + number2);
    })
  })
  return finalArray;
}

// console.log(allSums([1, 5, 10], [100, 500, 1000]));


// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.
// def descending(numbers)
//   result = []
//   index = numbers.length - 1
//   numbers.length.times do
//     result << numbers[index]
//     index = index - 1
//   end
//   result
// end
// p descending([1, 3, 5, 7])


// function descending(numbers) {
//   var i = numbers.length - 1;
//   var reversed = [];
//   while (i >= 0) {
//     reversed.push(numbers[i]);
//     i--;
//   }
//   return reversed;
// }

// console.log(descending([1, 3, 5, 7]));


// function descending(numbers) {
//   // console.log(numbers);
//   var reversed = [];
//   for (var i = numbers.length - 1; i >= 0; i--) {
//     reversed.push(numbers[i]);
//   }
//   return reversed;
// }

// console.log(descending([1, 3, 5, 7]));



// function sumCombinations(numbers1, numbers2) {
//   var i = 0;
//   var finalArray = [];
//   while (i < numbers1.length) {
//     // console.log(numbers1[i]);
//     var j = 0;
//     while (j < numbers2.length) {
//       finalArray.push(numbers1[i] + numbers2[j]);
//       j++;
//     }
//     i++;
//   }
//   return finalArray;
// }


// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));



// what if you wanted to practice js outside of class?
// ruby skills challenges into js
// redo the prework in js



// 5, 7, 10

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

// function joinStrings(strings) {
//   // return strings.join(", ");
//   var sentence = "";
//   strings.forEach(function(string) {
//     sentence += string + ", ";
//   })
//   return sentence;
// }


// console.log(joinStrings(["here", "are", "strings", "that", "will"]));



// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.

function twoSmallest(numbers) {
  var smallest = numbers[0];
  var indexOfSmallest = 0
  var i = 0;
  while (i < numbers.length) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
      indexOfSmallest = i;
    }
    i++;
  }  
  numbers.splice(indexOfSmallest, 1)
  var secondSmallest = numbers[0];
  var indexOfSecondSmallest = 0;
  var j = 0;
  while (j < numbers.length) {
    if (numbers[j] < secondSmallest) {
      secondSmallest = numbers[j];
      indexOfSecondSmallest = j;
    }
    j++;
  }
  
  return [smallest, secondSmallest];
}

// console.log(twoSmallest([5,2,7,9,12,-2,3,1]));





// 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.


function totalAs(strings) {
  var i = 0;
  var count = 0;
  while (i < strings.length) {
    var j = 0;
    while (j < strings[i].length) {
      // console.log(strings[i][j]);
      if (strings[i][j] === "a") {
        count++;
      }
      // console.log("****");
      j++;
    }
    i++;
  }
  return count;
}


console.log(totalAs(["apple", "banana", "apricot", "mango", "alfoaaanzo"]));

// 10
