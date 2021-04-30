// optional props

interface PaintOptions {
	shape: Shape;
	xPos?: number;
	yPos?: number;
}

// readonly props

interface SomeType {
	readonly prop: string;
}

// extending types

interface BasicAddress {
	name?: string;
	street: string;
	city: string;
	country: string;
	postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
	unit: string;
}

interface Colorful {
	color: string;
}

interface Circle {
	radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
	color: 'red',
	radius: 42,
};

// intersection types

interface Colorful {
	color: string;
}
interface Circle {
	radius: number;
}

type ColorfulCircle2 = Colorful & Circle;

// Generics

interface Box<Type> {
	contents: Type;
}

let box: Box<string> = { contents: 'text' };

//tuple type

type StringNumberPair = [string, number];
