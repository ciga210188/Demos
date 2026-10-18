// Array methods

//let numbers:number[]=[1,2,3,4,5]
let fruites:string[]=["apple","banana","orange","mango"]

console.log("numbers array:",numbers)
console.log("fruites array:",fruites)

console.log("Size of number array:",numbers.length)
console.log("Size of fruites array:",fruites.length)

//1 push  Add elements to the end of an array

numbers.push(6)
fruites.push("pineapple")

console.log("numbers array:",numbers)
console.log("fruites array:",fruites)

console.log("Size of number array:",numbers.length)
console.log("Size of fruites array:",fruites.length)

//2 Pop Remove last element from array

let lastn=numbers.pop()
let lastf=fruites.pop()

console.log("Number removed",lastn)
console.log("Fruite removed",lastf)

console.log("numbers array:",numbers)
console.log("fruites array:",fruites)

console.log("Size of number array:",numbers.length)
console.log("Size of fruites array:",fruites.length)

//3 Shift Removes first element from array

let fnumbers=numbers.shift()
let ffruite=fruites.shift()

console.log("First Number removed",fnumbers)
console.log("First Fruite removed",ffruite)

console.log("numbers array:",numbers)
console.log("fruites array:",fruites)

console.log("Size of number array:",numbers.length)
console.log("Size of fruites array:",fruites.length)

//4 unshift adds elements to the beginning of an array

numbers.unshift(2,4)
fruites.unshift("grape","kiwi")


console.log("numbers array:",numbers)
console.log("fruites array:",fruites)

console.log("Size of number array:",numbers.length)
console.log("Size of fruites array:",fruites.length)

// 5 concat combines two or more arrays

let combinednum=numbers.concat([8,9],[10])
let combinedfru=fruites.concat(["watermelon","mandarina"],["melon"])

console.log("numbers array:",combinednum)
console.log("fruites array:",combinedfru)

console.log("Size of number array:",combinednum.length)
console.log("Size of fruites array:",combinedfru.length)

//6 Slice Extract a section of an array

let extractedarray=combinedfru.slice(1,5)

console.log("fruites sliced",extractedarray)

//7 Splice Adds/removes elements from array (Everywhere)

//Ex1 only removed values

console.log("existing fruites",fruites)

let splicefruites=fruites.splice(1,2)
console.log("After spliced removed",fruites)
console.log("removed elements",splicefruites)

// Ex2 Add values

console.log("existing fruites",fruites)

fruites.splice(1,0,"pineapple",'avocado')

console.log("After spliced add",fruites)

//Ex3 removed and added
/*
console.log("existing fruites",fruites)

fruites.splice(1,2,"mango",'cherry')
console.log("After spliced removed mango and cherry",fruites)
*/
//Indexof finds index of an element. if not found returns -1

// Ex1

console.log("existing fruites",fruites)
let findindex=fruites.indexOf("mango")
console.log("index of cherry",findindex)

//Ex2 

console.log("existing fruites",fruites)
let findindex2=fruites.indexOf("papaya")
console.log("index of cherry",findindex2)

//Ex3

console.log("existing fruites",fruites)
let findindex3=fruites.indexOf("mango",2)
console.log("index of mango",findindex3)

//Ex4

console.log("existing fruites",fruites)
let findindex4=fruites.indexOf("grape",2)
console.log("index of grape",findindex4)

//Includes  Checks if an element exists

console.log("existing fruites",fruites)
let isFruitExists=fruites.includes("kiwi")

console.log("List includes avocado",isFruitExists)

//toString  Converts array to string

console.log("existing numbers",numbers)
let convertnumbers=numbers.toString()

console.log("Converted array to string",convertnumbers)

//

let marray:string[]=["w","e","l","c","o","m","e"]
console.log("original array:",marray)

let str=marray.toString()
console.log("converted array to string:",str)

