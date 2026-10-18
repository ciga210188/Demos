//Arrow Functions / Lambda Functions

//Ex1 Arrow function no param no return value
/*
let greet=():void =>
{
    console.log("hello typescript")
}

greet();
*/
//-------------------------------------------

//Ex2 Arrow with param and return
/*
let add=(a:number,b:number):number =>
{
    return a+b
}

console.log(add(10,20))
*/
//-------------------------------------

//Ex 3 arrow with implicit return
/*
let add=(a:number,b:number):number => a+b
let multiply=(a:number,b:number):number => a*b
  
console.log(add(10,20))
console.log(multiply(10,20))
*/
//---------------------------------------------

//Ex arrow with optional param
/*
let displayDetails=(id:number,name:string,mailId?:string):void =>
{
    console.log("ID",id)
    console.log("Name",name)
    if(mailId!==undefined)
    {
        console.log("Email",mailId)
    }
    

}

displayDetails(123,"scot","cc@gg.com")
displayDetails(123,"scot")
*/
//---------------------------------------

//Ex5 arrow with default
/*
let calculateDiscount=(price:number,rate:number=0.5):void =>
{
    let discount:number = price*rate
    console.log("Discount Amount:",discount)
}

calculateDiscount(1000,0.30);
calculateDiscount(1000);
*/
//---------------------------------------------

//Ex6 arrow rest param
/*
let findElements=(...elements:(number | string)[]):number => elements.length


console.log(findElements(3,"john",2,1,"scott"))
*/
//----------------------------------------------

//Ex 7 arrow with optional

