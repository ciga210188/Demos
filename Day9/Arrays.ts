//Arrays

//Ex1 using leteral
/*
let names:string[]=[]  //Array declaration

//Initialization/ Assigning values

names[0]="John"
names[1]="carlos"
names[2]="peter"
names[3]="smith"


//let names:string[]=["John","carlos","peter","smith"];
console.log(names)
*/
//---------------------------------------------

//Ex2 generic way
/*
let empNames:Array<string>=["John","carlos","peter","smith"];
let empIds:Array<number>=[10,11,12,13];
let data:Array<string|number>=["John",2,"peter",3,"carlos",4]
let mixdata:Array<any>=[1,"john",true,null]

//console.log(empNames[1])

//Ex1 iteration an array using for loop
console.log("Employee Names......")

for(let i=0;i<empNames.length;i++)
{
    console.log(empNames[i])
}
//---------------------------------------

//Ex2   iterating using for ... in
console.log("Employee IDs......")

for(let i in empIds)
{
    console.log(empIds[i])
}
//------------------------------------------

//Ex3 iterating using for... of loop

console.log("mixed data.....")

for(let value of data)
{
    console.log(value)
}
*/
//---------------------------------------------

//ex4 passing an array to a function
/*
function search(ele:number,arr:number[]):boolean
{
    for(let value of arr)
    {
        if(value===ele){
            return true
        }

    }
    return false
}

let arr:number[]=[10,20,30,40,50]

console.log(search(30,arr))
console.log(search(100,arr))
*/
//---------------------------------------------

//Ex5 a fucntion takes an array and returns an array
/*
function capitalizeWords(arr:string[]):string[]
{
    let result:string[]=[]
    for(let i=0;i<arr.length;i++)
    {
        result[i]=arr[i].toUpperCase();
    }

    return result;
}

let word:string[]=["hellow","john","typescript"]

console.log(capitalizeWords(word))
*/
