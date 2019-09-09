document.addEventListener('DOMContentLoaded',function(){

  function time() {
      var dat = new Date();
      document.getElementById('result').textContent = dat.toLocaleTimeString();
  }
  
  var timer = window.setInterval(time,false) ;

  document.getElementById('btn').addEventListener('click',function(){
    window.clearInterval(timer);
  },false);

  document.getElementById('btn2').addEventListener('click',function(){
    timer = window.setInterval(time,false);
  },false);

},false);
