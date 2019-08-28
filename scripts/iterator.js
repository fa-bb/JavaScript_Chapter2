let data_ary = ['one','two','three'];
let data_str = 'あいうえお';
let data_map = new Map([['Mon','月曜'],['Tue','火曜'],['Wed','水曜']]);

for(let d of data_ary){
  console.log(d);
}

for(let d of data_str){
  console.log(d);
}

for(let[key,value]of data_map){
  console.log(`${key}:${value}`);
}
