// Method Overloading and Constructor Overloading in TS

class Calculator
{
    //Constructor Overloading
    constructor();
    constructor(a:number,b:number);

    constructor(a?:number,b?:number)
    {
        if(a!==undefined && b!==undefined){
            console.log("Sum of a & b ",(a+b))
        }
        else{
            console.log("Default constructor called")
        }
    }

    // Method Overloading
    add(a:number,b:number):number;
    add(a:number,b:number,c:number):number;

    add(a:number,b:number,c?:number):number
    {
        if(c!==undefined){
            return (a+b+c)
        }
        
        return (a+b)
        
    }

}

// Usage

//Contructor Overloading
let calc1=new Calculator();
let calc2=new Calculator(2,4);

//Method Overloading
console.log("adding 2 number",calc1.add(2,5)),
console.log("Adding 3 numbers:",calc2.add(10,20,30));