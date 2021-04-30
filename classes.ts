class Point3 {
	readonly x: number;
	readonly y: number;

	constructor() {
		this.x = 1;
		this.y = 2;
	}
}

const pt = new Point3();

// implements

interface Pingable {
	ping(): void;
}

class Sonar implements Pingable {
	ping() {
		console.log('ping!');
	}
}

// extends

class Animal {
	move() {
		console.log('Moving along!');
	}
}

class Dog extends Animal {
	woof(times: number) {
		for (let i = 0; i < times; i++) {
			console.log('woof!');
		}
	}
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);

// public, private, protected members

class Greeter {
	public greet() {
		console.log('hi!');
	}
}
const g = new Greeter();
g.greet();

class Base {
	protected m = 10;
}
class Derived extends Base {
	// No modifier, so default is 'public'
	m = 15;
}
const d12 = new Derived();
console.log(d12.m); // OK

class A {
	private x = 10;

	public sameAs(other: A) {
		// No error
		return other.x === this.x;
	}
}

// Generic classes

class Box<Type> {
	contents: Type;
	constructor(value: Type) {
		this.contents = value;
	}
}

const b = new Box('hello!');

// Parameter properties

class Params {
	constructor(public readonly x: number, protected y: number, private z: number) {
		// No body necessary
	}
}
const a3 = new Params(1, 2, 3);
console.log(a3.x);

//Abstract classes

abstract class Base2 {
	abstract getName(): string;

	printName() {
		console.log('Hello, ' + this.getName());
	}
}
