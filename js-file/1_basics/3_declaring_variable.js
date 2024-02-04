/**
 * 변수 선언
 * 
 * 1) var : 더 이상 사용 x
 * 2) let
 * 3) const 
 */

var name = "kjm";
let age = 24;
const address = 3;

console.log(name);

console.log(age);

console.log(address);

/**
 * let과 var로 선언하면 값을 변경할 수 있다.
 */

name = "jk";
console.log(name);

/**
 * 선언과 할당
 * 1) 변수를 선언 : var name;
 * 2) 할당 : name = "kjm";
 * 3) var, let으로 변수를 선언만 해놓으면, 자동으로 undefined로 할당된다.
 */

let friend;
console.log(friend);