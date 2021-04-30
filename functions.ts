function greeter(fn: (a: string) => void) {
	fn('Hello, World');
}

function printToConsole(s: string) {
	console.log(s);
}

greeter(printToConsole);

type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
	// ...
}

//Определение свойств внутри функции

type DescribableFunction = {
	description: string;
	(someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
	console.log(fn.description + ' returned ' + fn(6));
}

//construct signatures

interface SomeObject {
	name: string;
}

type SomeConstructor = {
	new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
	return new ctor('hello');
}

//Generic functions

function firstElement<Type>(arr: Type[]): Type {
	return arr[0];
}

// s is of type 'string'
const s = firstElement([ 'a', 'b', 'c' ]);
// n is of type 'number'
const n = firstElement([ 1, 2, 3 ]);

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
	return arr.map(func);
}

//Ограничения дженериков

function longest<Type extends { length: number }>(a: Type, b: Type) {
	if (a.length >= b.length) {
		return a;
	} else {
		return b;
	}
}

// longerArray is of type 'number[]'
const longerArray = longest([ 1, 2 ], [ 1, 2, 3 ]);
// longerString is of type 'string'
const longerString = longest('alice', 'bob');
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);

// Определение типов аргументов
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
	return arr1.concat(arr2);
}

const arr = combine<string | number>([ 1, 2, 3 ], [ 'hello' ]);

// Optional parameters

function f(x?: number) {
	// ...
}
f(); // OK
f(10); // OK

// Overloads

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
	if (d !== undefined && y !== undefined) {
		return new Date(y, mOrTimestamp, d);
	} else {
		return new Date(mOrTimestamp);
	}
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

// Rest params and args

function multiply(n: number, ...m: number[]) {
	return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

const arr1 = [ 1, 2, 3 ];
const arr2 = [ 4, 5, 6 ];
arr1.push(...arr2);

// Params destructuring

function sum({ a, b, c }: { a: number; b: number; c: number }) {
	console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });

// Same as prior example
type ABC = { a: number; b: number; c: number };
function sum2({ a, b, c }: ABC) {
	console.log(a + b + c);
}
