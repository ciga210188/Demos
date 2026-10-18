/*
1) Primitive Data Types (Built-in Data Types)
Number, String, Boolean, Null, Undefined, Symbol, BigInt   
2) Non-Primitive Data Types (Objects)
Array, Class, Object, Function, Date, RegExp, Error
*/
//-------------------------------------------

// number type
/*
let age: number = 30;
let price = 29.99;
let bigNumber= 9007199254740991n;
console.log("Age: ",age);
console.log("Price is:",price);
console.log("Big Number is:",bigNumber);
*/
//-------------------------------------------

// Strings
/*
let firstName: string = "John";
let lastName: string = 'Doe';
let greeting: string = `Hello, ${firstName} ${lastName}`;
console.log(greeting);
*/

//-------------------------------------------
// Boolean

/*
let isStudent: boolean = true;
let hasJob: boolean = false;
console.log("Is Student?", isStudent);
console.log("Has Job?", hasJob);
*/
//-------------------------------------------

// Null and Undefined
/*
let emptyValue: null = null;
let notAssigned: undefined = undefined;
console.log("Empty Value:", emptyValue);
console.log("Not Assigned:", notAssigned);
*/
//-------------------------------------------

//Any type
/*
let anyValue: any = "Hello, TypeScript!";
console.log(typeof anyValue);
anyValue = 42; // Now it's a number
console.log(typeof anyValue);
anyValue = true; // Now it's a boolean
console.log(typeof anyValue);

console.log("Any Value:", anyValue);
*/
//-------------------------------------------

//Union Types
/*
let id: number | string | boolean;
id = 101;
console.log(id);
id = "user123";
console.log(id);
id = true;
console.log(id);
*/
//-------------------------------------------

//Void Type

function showMessage(): void {
    console.log("This function does not return anything.");
}

showMessage();

function sum(x: number, y: number): number {
    return (x + y);
}

let res: number = sum(10, 20);
console.log("Sum is:", res);