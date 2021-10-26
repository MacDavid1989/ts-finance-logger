"use strict";
var greet;
// greet = "hello";
greet = function () {
    console.log("hey from sandbox");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(2, 4);
// add(2, "10");
