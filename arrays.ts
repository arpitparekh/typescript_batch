let numbers: number[] = [];
numbers.push(1);
numbers.push(2)
numbers.push(3)
numbers.push(4)
numbers.push(5)

let names : readonly string[] = ["John", "Jane", "Jack"]

console.log(names[0]);
console.log(names[2]);

let userData: [string, number, boolean] = ["John", 25, true]
userData.push("Jack")
console.log(userData);
