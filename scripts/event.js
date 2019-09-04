document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(e){
    var taget = e.target;
    console.log('発生元:'+taget.nodeName+'/'+taget.id);
    console.log('種類:'+ e.type);

  },false);

},false);
