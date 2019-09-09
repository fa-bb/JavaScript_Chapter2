function hoge(){
  console.log('あいうえお');
  setTimeout(function(){
    console.log('かきくけこ');
  },false);
  console.log('さしすせそ');
}

hoge();
