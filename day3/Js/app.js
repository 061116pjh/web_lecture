const number = 17;
const name = "jonghyuk";
console.log(`${name}의 나이는 ${number}`)

// 참조형 데이터 타입
const num1 = 1;
const num2 = 2;
const num3 = 3;
const arr = [1, 2, 3];

const student = {
    name :  "종혁",
    age : 17
}
console.log(student["name"]);
console.log(student.name);

// 객체
// 1. 키값으로 문자, Symbol이라는 일부 자료형만 허용
// 2. 정렬과 관여 X
// 3. 안의 데이터를 살펴보려면, 키값을 통해 배열을 얻어서 배열을 순회


// 맵
// 1. 키 값으로 모든 데이터 타입을 허용
// 2. 삽입된 순서대로 정렬
// 3. map.size로 크기를 바로 알 수 있음
// 4. map 자체로 순회할 수 있음

// 연산자
// 산술, 증감, 대입, 비교, 논리 (비트, Nullish)

// 산술 (+, -, *, /, %, **)
// a/b => 몫
// a%b => 나머지

// 증감 (++, --)
let age = 10;

age += 1;
age++;

// 비교 연산자
// <, >, <=, >=

// == (단순 값을 비교) VS === (타입까지 비교)
// !==

// 논리 연산자
// AND => &&, OR => ||, NOT => !

// 삼항
// 조건 ? 참일때 실행 결과 : 거짓일 때 실행결과

const result = 2 < 3 ? "참" : "거짓";
console.log(result)

// 대입 연산자
// &&=
// ||=

console.log(...arr)

const nums = [10, 20];
function sum(a, b){
    return a+b;
}

// 조건문
if(arr[0] === 10){ // 조건문
    // 참일때 실행
}else if(arr[0] === 1){
    // 두번째 조건문이 참일때 실행
}else{
    // 거짓일 때 실행
}

switch(arr[0]){
    case 10: // 조건
        // 실행문 + break
    case 1:
        // 실행문 + break
    default:
        // 아무것도 아님
}

// 반복문
for(let i=0; i<10; i++){ // 조건식
    // 실행문
}

console.log(sum(nums[0], nums[1]))
console.log(sum(...nums))


const studentMap = new Map();
studentMap.set("name", '수빈')
console.log(studentMap)

const array = [1, 1, 0, 0, 3] // [1, 0, 3]

const setArr = new Set(array);

console.log(setArr);