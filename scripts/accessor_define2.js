Object.defineProperties(this,{
  base:{
    get: function(){
      return _base;
    },
    set: function(base){
      if(typeof base === 'number' && base > 0){
        _base = base;
      }
    }
  },

  height:{
    get: function(){
      return _height;
    },
    set: function(height){
      if(typeof height === 'number' && height > 0){
        _height = height;
      }
    }
  }

});

