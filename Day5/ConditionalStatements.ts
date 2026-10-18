// if conditional statement

//Ex1
/*
let age:number=20;

if(age>=18){
    console.log("You are eligible to vote");
}
*/
//----------------------------------------------

//ex 2
/*
let num:number=15;

if(num%2==0){
    console.log(`${num} The number is even`);
}
else{
    console.log(`${num} The number is odd`);
}
*/
//----------------------------------------------

// Nested if statement
//Ex3
/*
let marks:number=60;

if(marks>=90 && marks<=100){
    console.log("Grade A");
}
else if(marks>=75 && marks<90){
    console.log("Grade B");
}
else if(marks>=60 && marks<75){
    console.log("Grade C");
}
else{
    console.log("Grade D");
}
*/
//----------------------------------------------

//ex4 Browser Selction
/*
let browser:string="Edge";

if(browser=="Chrome"){
    console.log("You are using Chrome");
}
else if(browser=="Firefox"){
    console.log("You are using Firefox");
}
else if(browser=="Safari"){
    console.log("You are using Safari");
}
else{
    console.log("You are using an unknown browser");
}
    */
//----------------------------------------------

//Switch Case statement
//ex5
/*
let day:number=7;

switch(day){
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
*/
//----------------------------------------------

//ex6

let x:number=20, y:number=5;

switch(x-y){
    case 0:
        console.log("Result is zero");
        break;
    case 5:
        console.log("Result is five");
        break;
    case 10:
        console.log("Result is ten");
        break;
    default:
        console.log("Result is unknown");
}