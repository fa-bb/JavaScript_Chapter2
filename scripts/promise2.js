asyncProcess('トクジロウ')
.then(
  response=>{
    console.log(response);

    return asyncProcess('にさんぶろう');
  }
)

.then(
  response => {
    console.log(response);
  },
  error =>{
    console.log(`エラー：${error}`);
  }
)
