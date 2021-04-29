"use strict";
// primitives
var someNum = 1;
var someString = '1';
var someBool = true;
// arrays
var someNumArr = [1, 2, 3, 4, 5, 6];
var someStringsArr = ['1', '2'];
var someStringsArr2 = ['1', '2'];
//any
var someExplicitAny = 123;
//inferred types
var NUMBER = 123;
var STRING = 'test';
var someNumInferred = 123;
var someStringInferred = 'test';
//types in functions
function greet(name) {
    console.log("Hello, " + name + "!");
}
//objects
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//optional props
function printName(obj) {
    // ...
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
//Union types
function printId(id) {
    console.log('Your ID is: ' + id);
}
// OK
printId(101);
// OK
printId('202');
// Exactly the same as the earlier example
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });
function printCoord3(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    console.log("The coordinate's z value is " + pt.z);
    console.log("The coordinate's w value is " + pt.w);
}
printCoord3({ x: 100, y: 100, z: 100, w: 100 });
// Type Assertions and conversion
var myCanvas = document.getElementById('main_canvas');
//Literal Types
function printText(s, alignment) {
    // ...
}
printText('Hello, world', 'left');
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
configure({ width: 100 });
configure('auto');
