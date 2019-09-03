document.addEventListener('DOMContentLoaded',function(){
  console.log("hello css");

  var elem = document.getElementById('elem');

  elem.addEventListener('mouseover',function(){
  console.log("hello css in");
    this.className = 'highlight';
  },false);

  elem.addEventListener('mouseout',function(){
  console.log("hello css out");
    this.className='';
  },false);


},false);
