var Member = function(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member('浩全','橋本');

mem.getName = function(){
  return this.lastName +' '+ this.firstName;
}

console.log(mem.getName());

var mem2 = new Member('雄介','橋本');

mem2.getName = function(){
  return this.lastName +' '+ this.firstName;
}

console.log(mem2.getName());


