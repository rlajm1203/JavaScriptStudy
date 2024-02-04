/**
 * Data Types
 * 
 * 6개의 Primitive Type (원시형 타입)
 * 한 개의 오브젝트 타입 (객체)
 * 
 * 원시형
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (정의되지 않은 상태)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 객체
 * 7) Object (객체)
 *  - Function
 *  - Array
 *  - Object
 */


// Number
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof(age));
console.log(typeof(tempature));

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof(age));
console.log(typeof(infinity));
console.log(typeof(ninfinity));
console.log(infinity);


// String
const name = "Jongmin";
const name2 = "jongmin 'kim'";
console.log(name2);

/**
 * Template Literal `` -> 입력한 그대로 저장
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 된다. \\
 * 
 */

const ive1 = "ive\nhi1";
console.log(ive1);

const ive2 = "ive\thi2";
console.log(ive2);

const ive3 = `ive
hi3`;
console.log(ive3);

const groupName = "ive";
console.log(groupName + "hi4");
console.log(`${groupName}hi4`);

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log(typeof(isFalse));
console.log(typeof(isTrue));

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 경우 지정되는 값
 * 
 * 직접 undefined로 값을 초기화 하는 건 지양해야 한다.
 */

let noInit;
console.log(noInit);
console.log(typeof(noInit));

/**
 * null
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * js에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용.
 */

let init = null;
console.log(init);
console.log(typeof(init)); // null의 타입을 출력해보면 타입은 object라고 나오는데, 자바스크립트에서도 공식적으로 버그라고 인정함
// 원래는 타입이 null인 게 맞음

/**
 * symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용
 * 다른 원시형 값들과 다르게 symbol 함수를 호출해서 사용
 */

const test1 = '1';
const test2 = '1';

console.log(test1===test2); // 같음 

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1===symbol2); // 다름

/**
 * Object 타입
 * 
 * Map
 * 키:밸류의 쌍으로 이루어져있다.
 * key:value
 * 
 * 중괄호 사용
 */

const dictionary = {
    red : "빨간색",
    blue : "파란색",
    orange : "주황색"
}

console.log(dictionary);
console.log(typeof(dictionary)); // key:value 쌍의 타입은 object
console.log(dictionary['red']);


/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입.
 * 대괄호 사용
 */

const memberArray = [
    'member1',
    'member2',
    'member3',
    'member4',
    'member5'
]
console.log(memberArray);

/**
 * index
 * 
 * 0부터 시작한다.
 * 1씩 올라간다.
 */
console.log(memberArray[0]);
console.log(memberArray[1]);
memberArray[0] = "changeMember1"
console.log(memberArray);
console.log(typeof(memberArray));

/**
 * Function은 너무 깊게 들어가야 할 내용
 * 양이 방대하다.
 */

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시한다. ex) C, JAVA
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고, 값에 의해 타입을 "추론한다." ex) JS, python
 * 
 * 
 */