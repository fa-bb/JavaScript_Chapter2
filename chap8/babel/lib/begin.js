let name = 'hoge';

console.log(`hoge${name}hoge`);

let add = (a, b) => a + b;

let sum = (...numbers) => {
  return numbers.reduce((prev, curry) => {
    return prev + curry;
  });
};
