// casting
// casting is converting one data type to another
// casting is done by using the as keyword
// casting is done by using the <> symbol

// number .. string .. booelan
let a : number = 10;

let n3: string = ((a as unknown) as string);

console.log(n3);

let bool: boolean = true;

let myNum: number = (bool as unknown) as number;
console.log(myNum);
