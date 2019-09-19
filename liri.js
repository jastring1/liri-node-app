require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var userInput = process.argv;

var liriFunc =userInput[2];
var searchItem = userInput.slice(2).join(" ");

console.log(liriFunc);
console.log(searchItem);