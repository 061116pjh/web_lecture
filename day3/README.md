## Day3

# Typography

- 글자를 보기 좋게 바꾸는 것 (line-height, letter-spacing, font-size, baseline)

## font

px : 절대 단위 Absolute unit <br>
em rem : 상대단위 Relative unit

- em : 실제 적용된 폰트 사이즈

- rem : root em <br>
- rem : html에 적용된 폰트 사이즈를 1rem으로 본다. <br>
  `html{font-size: 20px}` 와 같이 지정한 경우
- px, em, rem 원하는 대로 섞어쓰면 된다.
- font-family: 서체 사용
- font-weight: 두께
- color: 글자 색상 <br>
  hex rgb rgba<br>
  `#` `rgb()` `rgba()`

## line

- line-height: px, em, rem (em 많이 사용)
- line-height가 얼마든지, 글자는 정 중앙에 위치하게 됨 <br>
  (수직 정렬시, line-height 사용)
- letter-spacing: 글자와 글자 사이 자간 <br>
  px, em 중 현재 폰트 사이즈에 비례햇 변할 수 있도록 em 많이 사용
- text-alin: 텍스트 정렬
- text-indent: 들여쓰기
- text-transform: 알파벳 글자에만 적용
- text-decoration : 텍스트에 줄 넣는 속성 <br>
  => a태그 밑줄 지울 때 많이 사용 <br>
  font-style : `<em>` 속성의 경우 디폴트값이 italic이라 normal로 바꿀 때 많이 사용

## background

- background-size : 이미지 관련된 속성
- contain : 이미지가 잘리지 않게 축소해서 들어감

## transition

- transition : 스르륵 바뀌도록 하는 것 <br>

`property duration [timing-function] [delay]` <br>
property : 어떤 속성에 대해 스르륵 변할건지 (속성명 / all) <br>
duration : ms/s <br>
timing-function : ease-in, ease-out, ease-in-out <br>
delay : 특정 시간 있다가 변화가 시작되도록 함

## animation

animation : 각각의 요소가 많기 때문에 쪼개서 생각 <br>
name : @keyframes => 각각의 애니메이션 시작~끝에 어떻게 변할지 명시

# Page Layout ~ CSS 마지막 섹션 ~

- 페이지 전체를 설계할 때 디자인적 방법론이 존재한다, <br>
  디자인을 할 때 전체 화면을 특정 간격으로 쪼개서 비례적으로 설계를 한다.

- 격자무늬(grid)에 따라서 설계를 한다.

- grid system에 따라서 디자이너가 설계를 해주면, 우리도 그에 맞춰서 구현을 해야한다. <br>
  (grid 칸 수는 통상적으로 12의 약수)

## Flex vs Grid

- Flex : 한방향 레이아웃 시스템 (1차원)
- Grid : 가로, 세로 레이아웃 시스템 (2차원)

## 정석 Grid 하는 방법

- 정렬하고자 하는 요소가 자식으로 존재하는 부모 태그에게 <br>
  display: grid 속성을 부여합니다.

```
<style>
    .parent{
        display: grid;
    }
</style>
<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
</div>
```

- grid-template-rows: 행
- grid-template-columns : 열
- repeat(반복횟수, 반복값)
- fr : 숫자 비율대로 크기를 나눕니다. <br>
  ex) 1fr 1fr1fr : 1:1:1 비율인 3개의 rows를 만듦
- 최솟값, 최대값을 지정할 수 있는 minmax 함수를 사용하여 해당 공간의 <br>
  최소 크기, 최대 크기를 지정할 수도 있습니다.

# JavaScript

## 자바스크립트를 배우는 이유

- 웹을 제어하기 위해 만들어짐
- 웹사이트를 보다 인터렉티브하게
- 웹 전체를 아우르는 (사실상) 유일한 언어
  - 언젠가 사용되지 않을 언어를 공부하고 있지 않을까? 생각은 접어도 좋다.
- 브러우저에 내장되어, 설치할 필요조차 없는 언어
- 프론트엔드 개발을 희망하는 경우, 특히 필수적인 언어!
- React js, React Native, socket.io, node js 등 여러가지 언어 사용 가능

`Js 연결방법`

```
1. <script>

    </script>
2. <script src=""></script>
```

## 변수

var = 그냥 쓰레기 <br>
let = 재할당 가능 <br>
const(상수) = 변하지 않음 <br>
변수 선언시 const 사용 재할당이 필요할시 let으로 변경 var는 절대 사용금지!

const arr = [1, 2, 3]; <br>
=> 주소값을 저장함 <br>
=> arr[0] = 1; 가능

참조 데이터 : 주소지를 저장하는 데이터

## 배열

const arr = [1, 2, 3];

## 오브젝트

const object = { <br>
key: value, <br>
key: value <br>
} <br>

object 접근 방법

1. object.key
2. object["key"]

## 객체

1. 키값으로 문자, Symbol이라는 일부 자료형만 허용
2. 정렬과 관여 X
3. 안의 데이터를 살펴보려면, 키값을 통해 배열을 얻어서 배열을 순회

## 맵

1. 키 값으로 모든 데이터 타입을 허용
2. 삽입된 순서대로 정렬
3. map.size로 크기를 바로 알 수 있음
4. map 자체로 순회할 수 있음

## 연산자 (산술, 증감, 대입, 비교, 논리 (비트, Nullish))

- 산술 (+, -, \*, /, %, \*\*)
  - a/b => 몫
  - a%b => 나머지
- 증감 (++, --)

  ```
  let age = 10;

  age += 1;
  age++;
  age--;
  ```

- 비교연산자
  - <, >, <=, =>
  - == (단순 값을 비교) VS === (타입까지 비교)
  - !==
- 논리 연산자
  - AND => &&, OR => ||, NOT => !
- 삼항
  - 조건 ? 참일 때 실행 결과 : 거짓일 때 실행결과
  ```
  const result = 2 < 3 ? "참" : "거짓";
  console.log(result)
  ```
- 대입 연산자
  - &&=
  - ||=

## 조건문

`if문`

```
if(조건문){
    // 참일때 실행
}else if(조건문){
    // 두번째 조건문이 참일때 실행
}else{
    // 거짓일 때 실행
}
```

`switch문`

```
witch(참조){
    case 조건 1:
        // 실행문 + break
    case 조건 2:
        // 실행문 + break
    default:
        // 아무것도 아님
}
```

`반복문`

```
for(선언식 조건식 증감식){
  실행문
}
```

## 셋

`사용 방법`

```
const set = new Set(arr);
```

배열안의 중복된 값을 제거후 저장

## ...

`사용 방법`

```
...arr
```

배열안의 값을 하나 하나 분리해줌
