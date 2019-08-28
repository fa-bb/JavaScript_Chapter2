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
  work(){
    return this.getName()+' working';
  }
}

class BusinessMember('浩全','橋本');
console.log(bm.getName());
console.log(bm.work());
