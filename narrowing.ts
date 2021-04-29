// Types are narrowed by TypeScript

//typeof type guard
function padLeft(padding: number | string, input: string) {
	if (typeof padding === 'number') {
		return new Array(padding + 1).join(' ') + input;
	}
	return padding + input;
}

//Truthiness narrowing

function printAll(strs: string | string[] | null) {
	if (strs && typeof strs === 'object') {
		for (const s of strs) {
			console.log(s);
		}
	} else if (typeof strs === 'string') {
		console.log(strs);
	}
}

//Equality narrowing

function example(x: string | number, y: string | boolean) {
	if (x === y) {
		// We can now call any 'string' method on 'x' or 'y'.
		x.toUpperCase();
		y.toLowerCase();
	} else {
		console.log(x);
		console.log(y);
	}
}

//instanceof narrowing

function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}

//type predicates
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

//Discriminated union

interface Circle {
	kind: 'circle';
	radius: number;
}

interface Square {
	kind: 'square';
	sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
	switch (shape.kind) {
		case 'circle':
			return Math.PI * shape.radius ** 2;

		case 'square':
			return shape.sideLength ** 2;
	}
}
