var list = document.querySelectorAll('#list .external');

console.log(list.length);

for(var i = 0,len = list.length;i<len;i++){
  console.log(list.item(i).href);
}

