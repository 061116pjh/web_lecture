// fetch 사용법
fetch('hhtps://jsonplaceholder.typicode.com/todos/1').then((res) => res.json())
.then((data) => {
    // data를 응답받은 후에 로직 수행
})
.catch(error => alert(error.message))

new Promise((resolve, reject) => {
    setTimeout(()=>{
        throw new Error("에러 발생") // throw => 암시적으로 예외를 잡아냄
    }, 1000)
})
    .catch((err) => alert("에러 잘 처리했습니다. 정상적으로 다시 실행합니다."))
    .then(() => alert("다음 핸들러로 넘겼습니다."))