const name = "mustakeen";
const repoCount =50;
console.log(name+ repoCount+  "value");

console.log("hello my  name is ${name} and my repo Count is ${repoCount}");

const gameName = new String("Mustakeen");

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(newString);

const newStringOne = "     Hitesh  ";
console.log(newStringOne);
console.log(newStringOne.trim());