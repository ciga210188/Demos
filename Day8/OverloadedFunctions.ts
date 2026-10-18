//Step1 write a signatures of functions
//Step2 implement a function
//Step3 calling functions

//Ex1 Diff parameter types
/*
function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param:number|string):string
{
    if(typeof param==="number")
    {
        return(`user ID is",${param}`)
    }
    else{
        return(`user name is",${param}`)
    }
}

console.log(getInfo(101))
console.log(getInfo("John"))
*/
//----------------------------------------------

//Ex2 Different number of params
/*
function add(a:number,b:number):number;
function add(a:number,b:number,c:number):number;

function add(a:number,b:number,c?:number):number
{
    if(c!==undefined)
    {
        return a+b+c
    }
    return a+b
    
}

console.log(add(10,20))
console.log(add(10,20,30))
*/
//-------------------------------------------

//Ex3 Different return types
/*
function processInput(str:string):string;
function processInput(num:number):number;

function processInput(input:string | number):string | number
{
    if(typeof input === "string")
    {
        return input.toUpperCase()
    }
    else{
        return input*2
    }
}

console.log(processInput("john"))
console.log(processInput(10))
*/
//--------------------------------------

//ex4
/*
function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:boolean):string;

function greet(value:string|number|boolean):string
{
    if(typeof value === "string")
    {
        return `Hello ${value}`
    }
    else if(typeof value === "number")
    {
        return `You are ${value} years old`
    }
    else
    {
         let res:string=value? "Married" : "Single"
         return res
    }
}

console.log(greet("charlie"))
console.log(greet(38))
console.log(greet(false))
*/