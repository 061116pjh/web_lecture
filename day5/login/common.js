const $loginBox = document.querySelector('.login-form');
const $loginInput = document.querySelector('.input');
const $greeting = document.querySelector('#greeting');
// const $loginBtn = document.querySelector('.btn');
const $loginForm = document.querySelector('.form');

const submitEvent = (e) => {
    const $userName = $loginInput.value;
    e.preventDefault();
    if($userName === ""){
        alert("값을 입력해주세요")
        return;
    }else if($userName.length > 15){
        alert("15자 이내로 작성해주세요")
        return;
    }else{
        $greeting.textContent = `${$userName}님, 환영합니다!`;
        $loginBox.classList.add("hidden");
        $greeting.classList.remove('hidden');
    }
}
$loginForm.addEventListener('submit', submitEvent);

// alert("aleart");
// prompt("prompt");
// confirm("confirm"); 