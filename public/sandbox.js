"use strict";
var greet;
// greet = "hello";
greet = function () {
    console.log("hey from sandbox");
};
var add = function (a, b, c) {
    console.log(a + b);
};
add(2, 4);
// add(2, "10");
