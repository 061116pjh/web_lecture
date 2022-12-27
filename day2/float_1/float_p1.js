const $lis = [document.querySelectorAll('a')];
let active = $lis[0][1];
$lis[0][1].classList.add('active');
$lis[0].forEach(e => {
    e.addEventListener('click', function(){
        active.classList.remove('active');
        e.classList.add('active');
        active = e; 
    })
})