// aliases is also known as secondary name
type maroNumber = number

let n1: maroNumber = 12

// object types
type car = {
  name: string,
  model: string,
  year: number
}

let car1: car = {
  name: "BMW",
  model: "X5",
  year: 2020
}

// interface type

interface car2 {
  name: string,
  model: string,
  year: number
}

interface carupdate extends car2 {
  milage: number
}

let myCar: carupdate = {
  name: 'BMW',
  model: 'X5',
  year: 2020,
  milage: 100,
};

let myCar2: carupdate = {
  name: 'Maritu',
  model: '800',
  year: 1996,
  milage: 40,
}

console.log(myCar.name);
console.log(myCar.model);
console.log(myCar.year);
console.log(myCar.milage);

