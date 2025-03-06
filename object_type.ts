// object
// object is key value pair
// object is collection of properties
// object is reference type

let person : {name:string,age:number,isMale:boolean} = {
  name: "John",
  age: 25.0,
  isMale: true
}
console.log(person);

person.name = "Jane"
console.log(person);

// empty object in typescript
let emptyObj: { [key: string]: number } = {}
emptyObj.name = 121
emptyObj.age = 25

// object inside object
let person2 : {name:string,age:number,isMale:boolean,address:{city:string,state:string}} = {
  name: "John",
  age: 25.0,
  isMale: true,
  address: {
    city: "New York",
    state: "NY"
  }
}
