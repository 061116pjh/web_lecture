async function f1(){
    // await 사용 가능!

    let p = new Promise((resolve, reject) =>{
        setTimeout(() => resolve("완료"), 1000)
    })
    let result = await p;
    alert(result)
}
f1.then()