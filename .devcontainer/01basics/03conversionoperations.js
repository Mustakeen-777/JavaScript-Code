let score = "33"
 
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score);
console.log(typeof valueInNumber);
console.log(typeof valueInNumber);

// "33" -> 33
// "33abc" -> NaN (not an Number)
//  true -> 1; false -> 0;

let isLoggedIn = true;
let valueInNumber2 = Number (isLoggedIn);
console.log(valueInNumber2);

// '' -> false
// "MN" -> true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ####OPERATIONS.......................
 
let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*3);  // /, % , ......

let str1 = "Hello";
let str2 = "Mustakeen";
 
let str3 = str1 +" "+ str2;
console.log(str3)

console.log("1"+ 1);
console.log("2"+ 1);
console.log("1"+2+2);
console.log(1+2+'3');
console.log(true);
console.log(+true);
// console.log(true+); -> error
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2+2;
console.log(num1);
console.log(num2);
console.log(num3);

let gameCount = 100;
gameCount++;
console.log(gameCount);
++gameCount;
console.log(gameCount);