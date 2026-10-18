// parent Class

class Person
{
    public name:string;    // public -accessible anywhere
    protected age:number;  // protected - accessible within the class and its subclasses
    private ssn:number;    // private - accessible within a class

    constructor(name:string, age:number, ssn:number){
        this.name=name
        this.age=age
        this.ssn=ssn
    }

    displayInfo(){
        console.log("Name",this.name)
        console.log("Age",this.age)
        console.log("SSN",this.ssn)
    }

}

//Child Class
class Employee extends Person{

    private employeeId:number;

    constructor(name:string, age:number, ssn:number, employeeId:number){
        super(name,age,ssn);
        this.employeeId=employeeId
    }

    showEmployeeDetails(){
        console.log("Name:",this.name)
        console.log("Age:",this.age)
        //console.log("Age:",this.ssn) // Error only for class Person
        console.log("EmployeeId:",this.employeeId)
    }
}

let emp=new Employee("john",30,22222,101)

emp.displayInfo()
emp.showEmployeeDetails()
console.log(emp.name)
//console.log(emp.age)  Not accessible
//console.log(emp.ssn)  Not accessible
