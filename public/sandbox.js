"use strict";
// let greet: Function
// eg 1
var greet;
greet = function (name, greeting) {
    console.log(name, greeting);
};
// eg 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action == "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// eg 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name, ninja.age);
};
