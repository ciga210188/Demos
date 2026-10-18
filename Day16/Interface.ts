// Interface. is a way to define the structure of an object

//Abstract method: we only signature of the method. (thre is no implementation)

// 1. regular properties
// 2. Optional properties
// 3. Readonly properties and function
// 4. Extending interfaces
// 5. Class implements interface

//Ex1 Basic interface
/*
interface Person
{
    name:string
    age:number
}

let student: Person={ name:"John", age:30 }

console.log(student.name)
console.log(student.age)
console.log(student)

//Ex2 Optional Properties

interface Employee
{
    eid:number
    ename:string
    edepartment?:string
}

let emp:Employee={eid:101,ename:"john"}
let emp1:Employee={eid:102,ename:"smith",edepartment:"test"}

console.log(emp.eid,emp.ename,emp.edepartment)
console.log(emp1.eid,emp1.ename,emp1.edepartment)

//Ex3 Readonly property (readonly to prevent modification) & Function type

interface Book
{
    title:string
    readonly isbn:string

    display():void   // Abstract Method
}

let b1:Book={
    title:"learn playwright",
    isbn:"123abc",

    display(){
        console.log(b1.title, b1.isbn)
    }
}

console.log("print title", b1.title)
console.log("print isbn", b1.isbn)
b1.display();

console.log("After changing values")

b1.title="learn TS"
console.log("print title", b1.title)
//b1.isbn="345hgf"

//Ex4 Extending nterfaces

//Parent Interface
interface Animal{
    name:string
}

//Child Interface
interface Dog extends Animal{
    color:string
}

let mydog:Dog={
    name:"firulais",
    color:"black",
}

console.log(mydog)
console.log(mydog.name)
console.log(mydog.color)

*/
//Ex5. 
//class can extends another class
//interface extends another interface
//class can implement interface

interface Animal{
    name:string
    sound():void
}

class Dog implements Animal{
    name:string  //inhertied from interface animal
    color:string //property belogs to Dog

    constructor(name:string,color:string){
        this.name=name
        this.color=color
    }

    sound(){
        console.log("bark...")
    }

}

let pet=new Dog("Tommy","black");
console.log(pet.name)
pet.sound()
console.log(pet.color)