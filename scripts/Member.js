/**
 * @constructor
 * @classdesc
 * @param {string} firstName
 * @param {string} lastName
 * @throws {Error} firstNameかlastNameが足りません
 * @author Yoshihiro Yamada
 * @version 1.0.0
 */

var Member = function(firstName,lastName){
  if(firstName === undefined || lastName === undefined){
    throw new Error('firstNameかlastNameが足りません');
  }
  this.firstName = firstName;
  this.lastName = lastName;
};

/**
 * メンバーに関する詳細情報を表示します。
 * @return {String} メンバーの氏名
 * @deprecated {@link Member#toString}メソッドの代わりに利用してください
 */

Member.prototype.getName = function(){
  return this.lastName +' '+ this.firstName;
};

/**
 * Memberクラスの内容を文字列化します
 * @return {String} メンバーの氏名
 */

Member.prototype.toString = function(){
  return this.lastName +' '+ this.firstName;
};

