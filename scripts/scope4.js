var scope = 'Global Vriable';
function checkScope(){
  var scope = 'Local Variable';

  var f_lit = function(){return scope;};
  convert.log(f_lit());

  var f_con = new Function('return scope;');
  convert.log(f_con());
}

checkScope();
