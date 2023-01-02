
// Promise 객체를 만들어 병렬로 수행할 작업을 적어줌
// const p1 = new Promise ( function (resolve, reject) {
//     setTimeout(() => resolve("p1 객체가 작업이 성공적으로 완료됨"), 3000)
// })

// const p2 = new Promise ((resolve) => {
//     setTimeout(()=> resolve("p2 객체 작업이 성공적으로 완료됨"), 4000)
// })

// const p3 = new Promise((reject) => {
//     setTimeout(()=>reject(new Error("p3 작업 중 에러 발생"), 1000))
// })

// p3.then(null, (reject)=> console.log);

// 작업이 완료된 후 어떻게 처리해줄지 (소비자)

// console.time("test");

// 모든 Promise 객체 (p1, p2)가 완료되었을 때
// Promise.all([p1, p2]).then((resolve1, resolve2)=>{
//     console.log(resolve1, resolve2);
//     console.timeEnd("test");
// })

new Promise((resolve, reject) => {
    setTimeout(()=>resolve("완료!"),1000);
    // setTimeout(() => reject(new Error("에러발생!"), 2000))
})
// .then((result) => alert(result))
// .catch((error) => alert(error))
.finally(()=>alert("Promise가 준비됨"))
.then((result)=>alert(result))

// 체이닝 방법
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

// 잘못된 방법
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