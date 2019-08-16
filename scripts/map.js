let m = new Map();
m.set('dog','one!one!');
m.set('cat','nya-nya-');
m.set('mouse','tyu-tyu-');

for(let key of m.keys()){
console.log('key:'+key);
}

for(let value of m.values()){
console.log('value:'+value);
}

for(let [key,value] of m){
console.log('key,value:'+value);
}

for(let [key,value] of m){
console.log('key,value:'+key);
}

m.delete('dog');
console.log(m.size);

m.clear();
console.log(m.size);
