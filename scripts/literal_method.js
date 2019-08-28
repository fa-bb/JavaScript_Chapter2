let menber ={
  name: '橋本浩全',
  birth: new Date(1987,1,8),
  toString(){
    return this.name+'/birth:'+this.birth.toLocaleDateString();
  }
};

console.log(menber.toString());
