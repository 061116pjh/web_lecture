## Day5

# 스레드

스레드 => call stack <br>
call stack는 하나만 가지고 있다

# Js 비동기 처리

현재 작업을 비동기적으로 처리하고 있는 상황

1. 작업중 (pending) => 성공 및 실패 여부가 결정되지 않은, promise객체가 실행중
2. 작업 완료 & 성공 => 작업 완료! 성공했다 + 값 (resolve)
3. 작업 완료 & 실패 => 작업 완료! 실패... + 실패한 이유, 에러객체 (reject)

## callback

예전 방식 (수업시간에 다루지 않음)

## promise (ES6 표준 체택)

promise => 성공(value) || 실패 (error)

```
const p1 = new Promise ( function (resolve, reject) {
    // 작업

    // 성공 했을 때
    resolve("p1 객체가 작업이 성공적으로 완료됨");

    // 실패 했을 때
    reject(new Error("p1 처리 중 에러 발생"));
})
```

## Async & Await (ES8)

async 함수가 아닌 함수에서 async 함수를 호출 해 await를 사용하려면 <br>
async 함수 호출 후 .then을 사용하면 가능 <br>

## then

1. .then(value, error => )
2. .then(value => ).catch

`chaining`

```
new Promise(function(resolve, reject){
    setTimeout(()=>resolve(1), 1000);
}).then(function(result){
    alert(result);
    return result*2;
}).then(function(result){
    alert(result)
    return result*2;
}).then(function(result){
    alert(result)
    return result *2;
})
```

`잘못된 방법`

```
let promise = new Promise(function(resolve, reject){
    setTimeout(()=>resolve(1), 100)
})

promise.then(function(result){
    alert(result);
    return result*2;
})
promise.then(function(result){
    alert(result);
    return result*2;
})
promise.then(function(result){
    alert(result);
    return result*2;
})
```

# DOM

## 선택자

```
1. document.querySelector();
// css와 같은 선택자를 가지고 중복시 가장 첫번째 요소를 불러온다.
2. document.querySelectorAll();
// css와 같은 선택자를 가지면서 해당 요소 전부 불러온다.
3. document.getElementById();
// 해당 id값을 가진 요소 하나만 불러온다.
4. document.getElementsByClassName();
// 해당 class를 가진 요소를 모두 가져온다.
5. document.getElementsByName();
// 해당 name을 가진 요소를 모두 가져온다.
6. document.getElementsByTagName();
// 해당 tagname을 가진 요소를 모두 가져온다.
```

1, 2번 방법을 가장 지향함

## class

```
1. Element.classList // 쌓이는 요소로 가져온다 (배열)
2. Element.className // 나열 되도록 가져온다 (쓰레기)
```

1번 방법만 사용하기! <br><br>
`classList 사용법`

```
Element.classList.add(''); // 해당 class 생성
Element.classList.remove(''); // 해당 class 삭제
Element.classList.toggle(''); // toggle로 있으면 삭제 없으면 생성
```

## event

Event
=> 키보드, 마우스, form 등등 <br>

- 키보드 => 뭔가 입력했을 때 "keydown"
- 마우스 => 클릭 "click" / 마우스 올렸을 때
- form => 제출되었을 때 "submit"

`이벤트 사용하기`

```
Element.addEventListener("event", function);
```

`이벤트 삭제하기`

```
Element.removeEventListener("event", function);
```

## bubble

bubble => 자식요소와 부모요소가 같은 이벤트와 같은 함수를 가질 때 발생하는 현상 <br>
bubble을 막는 방법 => stopPropagagtion()
