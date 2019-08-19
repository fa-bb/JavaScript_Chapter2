var scope = 'Global Vriable';

function getValue(){
  var scope = 'Local Vriable';
  return scope;
}

console.log(getValue());
console.log(scope);
