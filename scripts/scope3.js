var score = 'Global Vriable';

function getValue(){
  console.log(scope);
  var scope = 'Local Vriable';
  return scope;
}

console.log(getValue());
console.log(scope);
