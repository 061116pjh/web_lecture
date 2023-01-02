// DOM => HTML 문서에 직접 접근할 수 있는 것
const submitBtn = document.getElementById('submit-btn');  // id를 기준으로 가져온다
console.log(submitBtn);
const hidden = document.getElementsByClassName('hidden');
console.log(hidden);
const [divA, divB, divC] = document.getElementsByTagName('div');
console.log(divA);
const radio = document.getElementsByName('animal');
console.log(radio);
const divs = document.querySelectorAll('div');
console.log(divs);

divA.classList.add('color-red');



const form = document.querySelector('form')
// form.appendChild(newDiv)

// Event
// 키보드 => 뭔가 입력했을 때 "keydown"
// 마우스 => 클릭 "click" / 마우스 올렸을 때 
// form => 제출됬을 때 "submit"

divA.addEventListener('click', () => {
    
})