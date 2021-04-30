function identity<Type>(arg: Type): Type {
	return arg;
}
let output = identity<string>('myString');
//or
let output2 = identity('myString');

interface GenericIdentityFn {
	<Type>(arg: Type): Type;
}

function identity2<Type>(arg: Type): Type {
	return arg;
}

let myIdentity: GenericIdentityFn = identity;

// generic classes

class GenericNumber<NumType> {
	zeroValue: NumType;
	add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
	return x + y;
};

// constraints

interface Lengthwise {
	length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
	console.log(arg.length); // Now we know it has a .length property, so no more error
	return arg;
}
