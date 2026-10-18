/*
1. Class
2. Read only properties
3. Optional property
4. Static variables and methods
    1. Static are common accross all objects
    2. Static can be accessed through class name directly
    3. Static can be modified using any object
*/

class Student{
    

    readonly studentId:number;
    name:string;
    email?:string;
    static schoolnName:string="Penn State";

    constructor(sid:number,name:string,email?:string){
        this.studentId=sid;
        this.name=name;
        this.email=email;
    }

//Method

    displayInfo():void
    {
        console.log("Student id:", this.studentId)
        console.log("Student name:", this.name)

        if(this.email){
            console.log("Student email:", this.email)
        }
        else{
            console.log("Email is not provided")
        }
        console.log("School Name:",Student.schoolnName)
    }

    static changeSchoolName(newName:string):void{
        Student.schoolnName=newName;
    }
}

//Usage

let s1=new Student(101,"charlie gallardo");
let s2=new Student(102,"bob","cc@gg.com");

//Display Info
s1.displayInfo();
s2.displayInfo();

//Change the School name using static method

Student.changeSchoolName("Sunrise Academy");

console.log("After changing School Name")
s1.displayInfo();
s2.displayInfo();

//try to modify the sid of s1 object
//s1.studentId=104;
//s1.name="juan";

