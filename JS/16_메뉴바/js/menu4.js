
const get = (target) =>{
    return document.querySelector(target);
}
const getAll = (target) =>{
    return document.querySelectorAll(target);
}

let $gnbli = getAll('#header .nav > .gnb > li');

let $header = get('#header');

// li에 마우스 올리면 자식중에 두번째에 클래스 붙이기
console.log($gnbli);
$gnbli.forEach(element => {
    element.addEventListener('mouseenter', e => {
        $header.classList.add('on');
    })    
});

$header.addEventListener('mouseleave', e => {
    $header.classList.remove('on');
})