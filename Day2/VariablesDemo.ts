// Variable: Container hold/store some data

//Sytnax Keywords variableName: dataType = value

var age=30
console.log ("Age is: ", age);

/*var vs let vs const
  -----------------------
   1) Scope
   2) Declaration/Assignment
   3) Redeclaration
   4) Reinitialization/reassignment
   5) Hoisting
*/

// 1) Scope - Accessible Area (function Scope (var) & Block Scope (let & const)))

// Ex 1

function varScope() 
{
    if(true)
    {
        var msg="Hello, I am a var variable";
    }
    console.log(msg);
}

varScope();

// Ex 2
function blockScope() 
{
    if(true)
    {
        let msg="Hello, I am a let variable"
        const greet="Hello, I am a const variable"
        console.log(msg)
        console.log(greet)
    }
}

blockScope();

// Ex 3
function scopeDiff() {
    var x = 5;
    if (true) {
        var x = 10; // Reusing the same variable name
        let y = 20; // Block-scoped variable
        const z = 30; // Block-scoped constant
        console.log(x); // Outputs 20
        console.log(y); // Outputs 20
        console.log(z); // Outputs 30
    }
}

scopeDiff();
//----------------------------------------------

// 2) Declaration/Assignment
// Ex 1
var a; //Declaration
console.log(a);  //undefined
a=30 //Initialization/Assignment
console.log(a);  //30

// Ex 2
let b; //Declaration
console.log(b);  //undefined
b=40; //Initialization/Assignment
console.log(b);  //40

// Ex 3
const c=50; //Declaration & Initialization/Assignment
console.log(c);  //50
//------------------------------------------------

// 3) Redeclaration
// Ex 1
var x=10;
var x=20; // Valid - var can be redeclared
console.log(x); // Outputs 20

// Ex 2
let y=10;
// let y=20; // Invalid - let cannot be redeclared
console.log(y); // Outputs 10

// Ex 3
const z=10;
// const z=20; // Invalid - const cannot be redeclared
console.log(z); // Outputs 10
//-----------------------------------------------------

// 4) Reinitialization/reassignment
// Ex 1
var m=10;
m=20;   // Valid - var can be reassigned
console.log(m); // Outputs 20   

// Ex 2
let n=10;
n=20;  // Valid - let can be reassigned
console.log(n); // Outputs 20   

// Ex 3
const p=10; 
// p=20;  // Invalid - const cannot be reassigned
console.log(p); // Outputs 10
//-----------------------------------------------------

// 5) Hoisting
console.log(d); // Outputs undefined
var d = 10; // Declaration and initialization   
console.log(d); // Outputs 10

//console.log(e); // Outputs not initialized (hoisted but not initialized)
let e = 20; // Declaration and initialization   
console.log(e); // Outputs 20

//console.log(f); // Outputs not initialized (hoisted but not initialized)
const f = 30; // Declaration and initialization   
console.log(f); // Outputs 30