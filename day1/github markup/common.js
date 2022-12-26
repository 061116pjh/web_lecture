const $previous = document.querySelector('.previous');
const $next = document.querySelector('.next');
const $nums = [...document.querySelectorAll('.num')];
let pre = true;
let next = false;
let active = $nums[0];
let num = 0;

$nums.forEach(e => {
    e.addEventListener('click', function(){
        active.classList.remove('active');
        e.classList.add('active');
        active = e;
    })
})

$next.addEventListener('click', function(){
    if(num<7){
        num++;
        classList();
        pre = false;
        $previous.setAttribute('disabled', pre)
    }
    if(num===7){
        next = true;
        $next.setAttribute('disabled', next);
    }
})
$previous.addEventListener('click', function(){
    if(num >= 0){
        num--;
        classList();
        next = false;
        $next.setAttribute('disabled', next);
    }
    if(num===0){
        pre = true;
        $previous.setAttribute('disabled', pre);
    }
})
function classList(){
    active.classList.remove('active');
    $nums[num].classList.add('active');
    active = $nums[num];
    
}