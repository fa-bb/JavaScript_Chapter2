window.onload = function (){
  var btn = document.getElementById('btn');

  btn.onclick = function(){
    window.alert('こんにちわ、世界!');
  };

  btn.onclick =null;

}
