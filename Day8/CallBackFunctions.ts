// A callback function function passed as argument 
// to another function

//Ex1
/*
//Function tah takes callback funtion as parameter
function greet(name:string,callback:(message:string)=>void)
{
    console.log(name)
    callback("welcome")
}

//CallBack
function showMessage(message:string)
{
    console.log(message)
}

greet("john",showMessage)
*/
//-----------------------------------------

//Ex2
/*
function sum(a:number,b:number,callback:(result:number)=>void)
{
    let result=a+b
    callback(result)
}


//Callback
function displayResult(result:number):void
{
    console.log(result)
}

sum(10,20,displayResult)
*/