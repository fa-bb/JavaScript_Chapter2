scope = 'Global Vriable';

function getValue(){
  scope = 'Local Vriable';
  return scope;
}

console.log(getValue());
console.log(scope);
