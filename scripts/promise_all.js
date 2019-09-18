Promise.all([
  asyncProcess('トクジロウ'),
  asyncProcess('にさんぶろう'),
  asyncProcess('りんりん')
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー：${error}`);
  }
);


