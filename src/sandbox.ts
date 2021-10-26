let greet: Function;

// greet = "hello";
greet = () => {
  console.log("hey from sandbox");
};

const add = (a: number, b: number) => {
  console.log(a + b);
};

add(2, 4);
// add(2, "10");
