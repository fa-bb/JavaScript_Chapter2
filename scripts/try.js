var i = 1;
try{
i = i * k;  
}catch(e){
  console.log(e.message);
}finally{
  console.log('処理は完了しました');
}
