//Named Functions that is declared with a name

// Ex1 
/*
function display():void
{
    console.log("welcome typescript")
}

display()
*/
//---------------------------------------------

//Ex2 parameters return 
/*
function addNumbers(x:number, y:number):number
{
    return x+y
}

let res:number = addNumbers(2,3)
console.log(res)
*/
//--------------------------------------------------

//Ex3 Rest Parameters same types
/*
function addNumbers(...nums:number[])
{
    let i;
    let sum:number =0;

    for(i=0;i<nums.length;i++){
        sum=sum + nums[i];
    }
    console.log("sum of the numbers",sum)
}

addNumbers(1,2)
addNumbers(1,2,3)
addNumbers(1,2,3,20,40,50)
*/
//-------------------------------------------

//ex 4 rest param multiple types
/*
function findElements(...elements:(number | string)[]):number
{
    return elements.length;
}

console.log(findElements(3,"john",2,1,"scott"))
*/
//--------------------------------------------

// Ex5 Function optional param
/*
function displayDetails(id:number,name:string,mailId?:string):void
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
//-----------------------------------------

//ex6 default parameters
/*
function calculateDiscount(price:number,rate:number=0.5):void
{
    let discount:number = price*rate
    console.log("Discount Amount:",discount)
}

calculateDiscount(1000,0.30);
calculateDiscount(1000);
*/
//------------------------------------------