
const get = (target) => {
    return document.querySelector(target);
}
const getAll = (target) => {
    return document.querySelectorAll(target);
}

let $gnbli = getAll('#header .nav > .gnb > li');
let $subli = getAll('#header .nav .gnb li ul');
let $totalMenuBar = get('#header .total-menu-bar');
let $header = get('#header');

// li에 마우스 올리면 자식중에 두번째에 클래스 붙이기
console.log($gnbli);
$gnbli.forEach(element => {
    element.addEventListener('mouseenter', e => {
        let current = e.currentTarget;
        $subli.forEach(subItem => {
            subItem.classList.remove('on');
        })
        $totalMenuBar.classList.remove('on');
        current.children[1].classList.add('on');

        if ($totalMenuBar.classList.contains('on')) {
            $header.classList.add('on');
        } else if (!$totalMenuBar.classList.contains('on')) {
            $header.classList.remove('on');
        }
    })
});

$header.addEventListener('mouseleave', e => {
    $subli.forEach(subItem => {
        subItem.classList.remove('on');
    })
    $totalMenuBar.classList.remove('on');
    $header.classList.remove('on');
})
