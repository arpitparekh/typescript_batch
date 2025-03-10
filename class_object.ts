class Person{
  myname2: String = "";
}

let p1 = new Person();
p1.myname2 = "Raj";
console.log(p1);

let p2 = new Person();
p2.myname2 = "Ranjit";
console.log(p2);


class Vehicle{

  private vName: String;     // data security
  private average: number;

  constructor(vName: String, average: number){
    this.vName = vName;
    this.average = average;
  }

}

class Car extends Vehicle {

}

let v = new Vehicle("Bmw", 5);
console.log(v);

let v2 = new Vehicle("Audi", 10);
console.log(v2);

let c= new Car("BMW", 5);
console.log(c);
