//Tuple in TS

// Ex1 tuple with 2 values
/*
let person:[string,number]=["john",10]

console.log(person[0])
console.log(person[1])
*/
//-------------------------------------

//Ex2 tuple with multiple values
/*
let user:[number,string,boolean,number,string]=[10,"john",true,20,"carlos"]

//console.log(user)

//----------------------------------------

//Ex 3 iterating tuple using loop

console.log("using for loop")
for (let i=0;i<user.length;i++)
{
    console.log(user[i])
}

//Ex4 iterating for in loop
console.log("using for in")
for (let i in user)
{
    console.log(user[i])
}
//Ex5

console.log("using for of")
for (let value of user)
{
    console.log(value)
}
*/
//Ex6 tuple array array of tuples

let students:[number,string][]=[ [20,"John"],[10,"carlos"],[30,"smitt"]]
console.log(students.length)

console.log(students[0])

let tp=students[0]
console.log(tp[0])