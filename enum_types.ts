// enum are the group of constant
// enum value only takes string and numbers

const num: number = 12  // single constant

enum Direction {  // group of constant
  Left = 0,Right=1,Up=2,Down=3
}

let currentDirection = Direction.Right;
console.log(currentDirection);

// Direction.Left = 5

enum Names{
  Name1 = "John",
  Name2 = "Jane",
  Name3 = "Jack"
}
console.log(Names.Name1);

