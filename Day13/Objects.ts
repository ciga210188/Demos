// Objects - Objects contain group of properties and behaviors
// Contains variable and methos
// Objects is collection of keys and pairs

// Different ways to create an object in JS and TS

// 1. Using object type - define values for variables
// 2. Inline Type object - define the datatype of the keys
// 3. using type aliases
// 4. Using classes

// 1. Using object type - define values for variables

//let employee:object = { name:"john",age:30, salary:50000, job:"Engineer" }
/*
let employee = { 
    name:"john",
    salary:50000, 
    job:"Engineer",
    getDetails:function(){
        //console.log(this.name this.age, this.salary, this.job)
        return `${this.name} is an ${this.job} earning ${this.salary}`
    } 
}

console.log(typeof employee)

//accessing object - Approach 1( using . notation)

console.log(employee.name, employee.salary, employee.job);
console.log(employee.getDetails());

//Accessing object - Approach 2 (using bracket notation)

console.log(employee["name"], employee["salary"], employee["job"]);
console.log(employee["getDetails"]());

// Modify the value in the object
employee.job= "Manager";
//employee["job"]= "Manager";

console.log(employee.job)
*/
//-------------------------------------------------

// 2. Inline Type object - define the datatype of the keys
/*
let student:{ 
    name:string,
    age:number, 
    grade:string,
    getSummary:()=>string
} = 
{ 
    name:"Scott",
    age:30, 
    grade:"A",
    getSummary: function()
    {
        return `${this.name} is ${this.age} years old and score grade ${this.grade}`;
    }
}

console.log(student.getSummary())
console.log(student.name)

let student1:{
    name:string,
    age:number, 
    grade:string,
    getSummary:()=>string
}=
{
    name:"mary",
    age:16, 
    grade:"B",
    getSummary: function()
    {
        return `${this.name} is ${this.age} years old and score grade ${this.grade}`;
    }
}
*/
//----------------------------------------------------

// 3. using type aliases

//Example1
/*
type Product={
    name:string,
    price:number,
    getInfo:()=>string   
}

let book1:Product=
{
    name:"learn java",
    price:300,
    getInfo:function(){
        return `${this.name} cost ${this.price}`
    }
}
let book2:Product=
{
    name:"learn javascript",
    price:500,
    getInfo:function(){
        return `${this.name} cost ${this.price}`
    }
}
let book3:Product=
{
    name:"learn typescript",
    price:600,
    getInfo:function(){
        return `${this.name} cost ${this.price}`
    }
}

console.log(book1.getInfo())
console.log(book2.getInfo())
console.log(book3.getInfo())
*/

//Example 2 Intersection types
/*
type personal={ name:string,
                age:number,
                
                };
type contact={ email:string,
                phone:number,
};

type Candidate= personal & contact &
{
    getContactInfo:()=>string;
} 

let candidate1: Candidate={
    name:"Scott",
    age:25,
    email:"cc@gg.com",
    phone:5556738,
    getContactInfo:function(){
        return `${this.name} can be contacted by ${this.phone}`
    }

}

console.log(candidate1.getContactInfo())
*/
//-----------------------------------------------------

// 4. Using classes
/*
class Person{
    ssn:string;
    fname:string;
    lname:string;

constructor(ssn:string,fname:string,lname:string)
{
    this.ssn=ssn;
    this.fname=fname;
    this.lname=lname;
}

    getFullName():string{
         return `${this.fname}  ${this.lname}`
    }

    getDetails():string{
         return `SSN: ${this.ssn}, Name: ${this.getFullName()}`
    }
}   

//Object creation
let person1 = new Person('1123232','john','smith');

console.log(person1.getFullName())
console.log(person1.getDetails())

let person2 = new Person('222222','charlie','gallardo');

console.log(person2.getFullName())
console.log(person2.getDetails())
*/
