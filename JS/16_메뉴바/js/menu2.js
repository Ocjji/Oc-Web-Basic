
const get = (target) =>{
    return document.querySelector(target);
}
const getAll = (target) =>{
    return document.querySelectorAll(target);
}

let $gnbli = getAll('#header .nav > .gnb > li');
let $subli = getAll('#header .nav .gnb li ul');
let $header = get('#header');

// li에 마우스 올리면 자식중에 두번째에 클래스 붙이기
console.log($gnbli);
$gnbli.forEach(element => {
    element.addEventListener('mouseenter', e => {
        let current = e.currentTarget;
        $subli.forEach(subItem =>{
            subItem.classList.remove('on');
        })
        current.children[1].classList.add('on');
    })
});

$header.addEventListener('mouseleave', e=>{
    $subli.forEach(subItem =>{
        subItem.classList.remove('on');
    })
})