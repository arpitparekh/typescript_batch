// functions in type script

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

function display() : void{
  console.log("Hello World");
}

display()

// optional paramter

function sumKaro(a : number,b : number, c?: number) : number{
  if(c){
    return a + b + c
  }
  return a + b
}

console.log(sumKaro(1, 2, 3));
console.log(sumKaro(1, 2));


// default parameter

function maruParameter(a: number, b: number, c: number = 10): number {
  return a + b + c;
}

console.log(maruParameter(1, 2));
console.log(maruParameter(1, 2, 3));

// named parameter

function namedParameter({a, b, c}: {a: number, b: number, c: number}): number {
  return a + b + c;
}

console.log(namedParameter({ b: 10, a: 20, c: 30 }));


// rest paramter
function restFunction(a: number, b: number,...c: number[]): number {
  console.log(c);
  return a + b;

}

console.log(restFunction(1, 2, 3, 4, 5,6,77,554,5));

// arrow function

type maritype = (a: number, b: number) => number

let arrowFunction : maritype = (a, b) => {
  return a + b;
}
