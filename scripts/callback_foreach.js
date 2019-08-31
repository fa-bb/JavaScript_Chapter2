var data =[2,3,4,5];
data.forEach(function(value,index,array){
  console.log(value * value);
});


var data =[2,3,4,5];
data.forEach(function(v,i,a){
  console.log(v * v);
  console.log("index;"+ i);
  console.log("array;"+ a);
});
