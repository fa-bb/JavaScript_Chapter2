class Member {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName(){
    return this.lastName + firstName;
  }
}

let m = new Member('浩全','橋本');
console.log(m.getName());
