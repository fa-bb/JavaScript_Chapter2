let i = 0;
let member ={
  name: '橋本浩全',
  birth: new Date(1987,1,8),
  ['memo'+ ++i]: '正規会員',
  ['memo'+ ++i]: '支部会長',
  ['memo'+ ++i]: '関西'
};

console.log(member);


