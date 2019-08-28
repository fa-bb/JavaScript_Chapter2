class Member {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName(){
    return this.lastName + firstName;
  }
}

class BusinessMember extends Member{
  constructor(firstName,lastName,clazz){
    super(firstName,lastName);
    this.clazz = clazz;
  }
  getName(){
    return super.getName()+'/役職'+this.clazz;
  }
}

class BusinessMember('浩全','橋本','アルバイト');
console.log(bm.getName());
