//super() used to invoke immediate parent class constructor
// super - cannot be used to get parent class variables

class Parent{
    num:number=10;

    constructor(){
        console.log("This is parent class constructor")
    }

    display(){
        console.log("This is display Method from parent class..")
    }

}

class Child extends Parent{
    num:number=20;

    constructor(){
        super(); //Call parent class constructor
        console.log("This is child class constructor")
    }

    show(){
        console.log(this.num);
        console.log("This is show method from child class")
    }

    display(){
        super.display(); // This will invoke parent class method
        console.log("This is display method from child class")
    }

}

let c1=new Child();
c1.show()
c1.display()