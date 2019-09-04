document.addEventListener('DOMContentLoaded',function(){
  var elem = document.getElementById('elem');

  elem.addEventListener('click',function(){
    
    var classes = this.className.split(' ');

    var index = classes.indexOf('line');
    console.log('index:'+index);
    
    index = classes.indexOf('line2');
    console.log('index:'+index);

    index = classes.indexOf('highlight');
    console.log('index:'+index);

    console.log('-------------------------');
    if(index === -1){
      classes.push('highlight');
    }else{
      classes.splice(index,1);
    }

    this.className = classes.join(' ');

  },false);
},false);
