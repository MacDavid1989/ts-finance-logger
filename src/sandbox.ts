let greet: Function;

// greet = "hello";
greet = () => {
  console.log("hey from sandbox");
};

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(2, 4);
// add(2, "10");

const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(10, 7);
