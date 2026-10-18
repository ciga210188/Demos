//Inheritance

//A --- Properties and Mehotds   (Parent class)
//B extends A --- Properties_methods  (Child class)

//Parent class
class Car
{
    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string){
        this.name=name;
        this.color=color;
        this.model=model;
    }

    start(){
        console.log("car started")
    }

    stop(){
        console.log("Car Stopped")
    }

    displayInfo(){
        console.log(`Name: ${this.name},Color: ${this.color}, Model: ${this.model}`)
    }
}


// Child class
class Honda extends Car
{
    year:number;

    constructor(name:string,color:string,model:string, year:number){
        super(name,color,model)
        this.year=year;
    }

    //Method Overriding
    start(){
        console.log("Honda started")
    }

    yom(){
         console.log(`Name: ${this.name},Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`)
    }
}

// Child Class Maruthi

class Maruthi extends Car
{
    year:number;

    constructor(name:string,color:string,model:string, year:number){
        super(name,color,model)
        this.year=year;
    }

    //Method Overriding
    start(){
        console.log("Maruthi started")
    }

    yom(){
         console.log(`Name: ${this.name},Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`)
    }
}

//Usage

//Create Honda object

let honda=new Honda("honda","Red","city",2024);

console.log(honda.name)
console.log(honda.color)
console.log(honda.model)
console.log(honda.year)

honda.start()
honda.displayInfo()
honda.stop()
honda.yom()

//Create maruthi object

let maruthi = new Maruthi("maruthi","blue","Suzuki",2020)

maruthi.start();
maruthi.displayInfo();
maruthi.stop();
maruthi.yom()

//
let car:Car=new Honda("honda","Red","city",2024);

car.displayInfo()
car.start()