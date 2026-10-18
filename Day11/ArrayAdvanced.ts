// forEach(),  map(), filter(), reduce(), some(),every(),

// forEach() - Executes a function for each array element

// Ex1 Get index of all fruites along with value

//let fruits: string[]=['apple','banana','orange','mango','kiwi']

/*
console.log("printing fruits along with index using loop:")

for (let i in fruits)
{
    console.log(i,fruits[i])
}

console.log("printing fruits along with index using forEach method:")

fruits.forEach(function(element,index){
    console.log(`${index}`,`${element}`)
})
*/
//-----------------------------------------------

// Executng with arrow function
/*
console.log("printing fruits along with index using Arrow function method:")

fruits.forEach((element,index)=>{
    console.log(`${index}`,`${element}`)
})
*/

//-----------------------------------------------
/*
fruits.forEach((element,)=>{
    console.log(element.toUpperCase())
})
*/
//---------------------------------------------

//2 map() creates a new array with result of calling the function 
// on everyelement of an array

//Ex1
let numbers: number[]=[1,2,3,4,5];
/*
let squareNum = numbers.map(function(element){
    return element * element
})

console.log("square numbers:",squareNum)
console.log("original numbers:",numbers)
*/
//-------------------------------------------

//Ex2 douuble each number
/*
let doubleNum = numbers.map((element)=>{
    return element * 2
})
*/
/*
let doubleNum = numbers.map((element)=> element * 2)

console.log("original numbers:",numbers)
console.log("double numbers:",doubleNum)
*/

//3 Filter() creates a new array with all the elements that
// pass/satisfy the function

//Ex1 
/*
let evenNum = numbers.filter((element)=> (element % 2 == 0))

console.log("original numbers:",numbers)
console.log("square numbers:",evenNum)
*/
//--------------------------------------------

//Ex2 get only numbrs > 3
/*
let greaterNum = numbers.filter((element)=> element > 3)

console.log("original numbers:",numbers)
console.log("square numbers:",greaterNum)
*/
//---------------------------------------------

// 4 reduce() Applies a function on every element of an array
// and returns a single value

//Ex1 get total (sum) of al elements in array
/*
let total=0

for (let i=0;i<numbers.length;i++){
    total=total+numbers[i]
}

console.log("Total numbers:",total)
*/
//-----------------------------------------------

//Ex2 using Reduce() method returns 1 value
/*
let sumNum = numbers.reduce((total,element)=>total+=element,3) //3 is default accumulator

console.log("original numbers:",numbers)
console.log("sum of elements:",sumNum)
*/
//------------------------------------------------

//5 some() checks if any elements satisfy this condition

// Ex1 validates if element satisfies a condition
/*
let satisyNum = numbers.some((element)=> element==8)
let hasNegatives = numbers.some((element)=> element<0)

console.log("original numbers:",numbers)
console.log("sum of elements:",satisyNum)
console.log("has negatives:",hasNegatives)
*/

//6 every() validates if all elements satisfy a condition

//Ex1
/*
let areEven = numbers.every((element)=> element%2==0)

console.log("original numbers:",numbers)
console.log("elements are even:",areEven)

*/
//----------------------------------------------

//Ex2

let greatThan1 = numbers.every((element)=> element>0)

console.log("original numbers:",numbers)
console.log("elements are gretaer than 1:",greatThan1)



