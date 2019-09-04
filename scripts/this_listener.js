document.addEventListener('DOMContentLoaded',function(){
  var data = {
    title: 'Javaポケットリファレンス2',
    price: 2680,
    handleEvent : function(){
      console.log(this.title +'/'+ this.price + '円');
    }
  };
  document.getElementById('btn').addEventListener(
    // 'click',data.show,false);
    'click',data,false);
},false);
