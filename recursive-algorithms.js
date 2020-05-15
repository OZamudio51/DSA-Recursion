// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence.
// Your program should take a number as input.
// That number should be the number of sheep you have.
// The function should display the number along with the message
// "Another sheep jumps over the fence" until no more sheep are left.

function countingSheep(n) {
if(n === 0) {
  console.log('All the sheep have jumped over the fence.')

  }
  else {
    console.log(`${n}: another sheep jumps over the fence`)
    countingSheep(n-1)
  };
};

countingSheep(10);

//=================================================================================
// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters,
//  an integer as a base, and another integer as an exponent.
//  The function returns the value of the base raised to the power of the exponent.
//  Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(base, exp) {
  if(exp <= 0) {
    return exp = 0
  } else {
    return Math.pow(base, exp)
  }

}

console.log(powerCalculator(10, -2))

//=================================================================================
// // 3. Reverse String
// Write a function that reverses a string.
// Take a string as input, reverse the string, and return the new string.

function reverse(str) {
  return str.split('').reverse().join('').split('').join('');
};

console.log(reverse('hello'));

//=================================================================================
// 4. nth Triangular Number
// Calculate the nth triangular number.
// A triangular number counts the objects that can form an equilateral triangle.
// The nth triangular number is the number of dots composing a triangle with
// n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

function triangularNumber(n) {
  if(n < 2) {
    return n
  } else {
    return n + triangularNumber(n - 1);
  }
}

console.log(triangularNumber(5));

//=================================================================================
// 5. String Splitter
// Write a recursive function that splits a string based on a separator
//  (similar to String.prototype.split).
//  Don't use JS array's split function to solve this problem.
// Input: 02/20/2020
// Output: ["02", "20", "2020"]

const stringSplit = (str, sep) => {
let index = str.indexOf(sep);
if (index === -1)
  return [str];
    return [str.slice(0, index)].concat(stringSplit(str.slice(index + sep.length), sep));
};

console.log(stringSplit('02/20/2020', '/'))

//=================================================================================
// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number.
//  The Fibonacci sequence is a series of numbers in which each number is the sum of
// the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci
// sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function fibonacci(n) {
  if(n <= 0){
    return 0;
  }

  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7))

//=================================================================================
// 7. Factorial
// Write a recursive function that finds the factorial of a given number.
// The factorial of a number can be found by multiplying that number by each
// number between itself and 1. For example,
// the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factoral(n) {
  if (n === 0) {
    return 1;
  }
  return n * factoral(n - 1);
}

console.log(factoral(5));


//=================================================================================
// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it.
//  There are more than one possible paths through the Maze to the single exit point.
//  Write a recursive function that will help you find a possible path though the maze.

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

// let mySmallMaze = [[" ", " ", " "], [" ", "*", " "], [" ", " ", "e"]];

// var goalx = 0;
// var goaly = 3;

// function mazeRoute(x, y) {
//   if (
//     x < " " ||
//     x > mySmallMaze[0].length - 1 ||
//     y < " " ||
//     y > mySmallMaze.length - 1
//   )
//     return false;
//   if (mySmallMaze[x][y] === 0) return false;

//   if (x === goalx && y === goaly) {
//     console.log("Reached goal at: " + x + ":" + y);
//     return true;
//   }

//   if (mySmallMaze[x][y] === 9 || mySmallMaze[x][y] === 8) {
//     return false;
//   }
//   console.log("Im here at: " + x + ":" + y);

//   mySmallMaze[y][x] = 9;

//   if (mazeRoute(x + 1, y)) return true;
//   if (mazeRoute(x, y + 1)) return true;
//   if (mazeRoute(x, y - 1)) return true;
//   if (mazeRoute(x - 1, y)) return true;

//   mySmallMaze[y][x] =8;
//   return false;
// }

//=================================================================================
// 9. Find ALL the ways out of the maze
// Use the above maze and modify your solution so it finds All the possible exit paths 
// through the Maze. To find all possible exit paths through the maze, think about how
//  many places you can move at each turn. Possibly up, down, left or right?

// Notice that this maze has 3 exits paths. Your recursive function should print all 
// three of the paths with the proper directions. 
// For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD

//Going to get some further clarification with mentor on maze questions

//=================================================================================
// 10. Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word 
// or phrase in another, rearranged order. Write a function that creates an anagram list, 
// listing all the rearrangements of a given word. For example, if the user types "east", 
// the program should list all 24 permutations, including "eats", "etas", "teas", and 
// non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create
//  the new words. For example, given "east", use "e" as a prefix and place it in front of
// all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will 
// give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this 
// way until you find all the anagrams for "east". Then you can use "a" as a prefix and 
// permute the remaining words "est". For "east", there should be 24 words.

// const anagrams = (prefix, str) => {
//   if(str.length <= 1) {
//     console.log(`The anagram is ${prefix}${str}`)
//   }
//   else {
//     for(let i = 0; i < str.length; i++) {
//       let currentLetter = str.substring(i, i++);
//       let previousLetter = str.substring(0, i);
//       let nextLetter = str.substring(i+1);
//       anagrams(prefix+currentLetter, previousLetter+nextLetter);
//     };
//   }
// }

//this was crashing my browser so unsure if this is correct

//=================================================================================
// 11. Organization Chart
// Write a recursive function that prints the following organization chart. 
// Your output should be as shown below with proper indentation to show the hierarchy. 
// You may store the org chart in an object and send that as an input to your program.

let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function orgTraverse(node, indent=0) {
  for(var key in node) {
    console.log(' '.repeat(indent), key);
    orgTraverse(node[key], indent + 4);
  }
}

console.log(orgTraverse(organization));


//=================================================================================
// 12. Binary Representation
// Write a recursive function that prints out the binary representation of a given number.
// For example, the program should take 3 as an input and print 11 as output, or 25 as an 
// input and print 11001 as an output. Note that the binary representation of 0 should be 0.

function convertToBinary(num) {
  if(num > 0) {
    let binary = Math.floor(num % 2);
    return (convertToBinary(Math.floor(num / 2)) + binary);
  }
  else {
    return '';
  }
}


console.log(convertToBinary(3));