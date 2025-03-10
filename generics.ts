function maruFuntion<T = string>(a: T) {   // generic function
  console.log(a);
}

maruFuntion<number>(10)
maruFuntion<string>("Hello");
maruFuntion<boolean>(true)

maruFuntion<number>(12)


class MaroClass<T,A>{

  age: T;
  height: A;

  constructor(age: T, height: A) {
    this.age = age;
    this.height = height;
  }

}

const maro = new MaroClass<number, string>(20, "170cm");
console.log(maro);

