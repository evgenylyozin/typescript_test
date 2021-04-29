// primitives

let someNum: number = 1;
let someString: string = '1';
let someBool: boolean = true;

// arrays

let someNumArr: number[] = [ 1, 2, 3, 4, 5, 6 ];
let someStringsArr: Array<string> = [ '1', '2' ];
let someStringsArr2: string[] = [ '1', '2' ];

//any
let someExplicitAny: any = 123;

//inferred types

const NUMBER = 123;
const STRING = 'test';

let someNumInferred = 123;
let someStringInferred = 'test';

//types in functions

function greet(name: string): void {
	console.log(`Hello, ${name}!`);
}

//objects

function printCoord(pt: { x: number; y: number }) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//optional props

function printName(obj: { first: string; last?: string }) {
	// ...
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });

//Union types

function printId(id: number | string) {
	console.log('Your ID is: ' + id);
}
// OK
printId(101);
// OK
printId('202');

//Type aliases

type Point = {
	x: number;
	y: number;
};

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

type ID = number | string;

//Interface

interface Point2 {
	x: number;
	y: number;
}
interface Point2 {
	z: number;
}
interface Point3 extends Point2 {
	w: number;
}
function printCoord3(pt: Point3) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
	console.log("The coordinate's z value is " + pt.z);
	console.log("The coordinate's w value is " + pt.w);
}

printCoord3({ x: 100, y: 100, z: 100, w: 100 });

// Type Assertions and conversion

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

//Literal Types
function printText(s: string, alignment: 'left' | 'right' | 'center') {
	// ...
}
printText('Hello, world', 'left');

function compare(a: string, b: string): -1 | 0 | 1 {
	return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
	width: number;
}
function configure(x: Options | 'auto') {
	// ...
}
configure({ width: 100 });
configure('auto');
