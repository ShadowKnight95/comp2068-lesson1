//link to the node filesystem library to read the text files
var fs = require('fs');

//open and read the food list
var food = fs.readFileSync('food.txt', 'utf8');

//print the food heading
console.log('FOOD');

//print food list
console.log(food);

//open and read the food list
var drinks = fs.readFileSync('drinks.txt', 'utf8');

//print the food heading
console.log('\nDRINKS');

//print food list
console.log(drinks);