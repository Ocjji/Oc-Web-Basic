
const get = (target) => {
    return document.querySelector(target);
}
const getAll = (target) => {
    return document.querySelectorAll(target);
}

let $gnbli = getAll('#header .nav > .gnb > li');
let $subli = getAll('#header .nav .gnb li .sub');
let $header = get('#header');

let arrBg = ['on0', 'on1', 'on2', 'on3', 'on4'];
let menu_idx;

console.log($gnbli);
$gnbli.forEach((element, idx) => {
    element.addEventListener('mouseenter', e => {
        let current = e.currentTarget;
        $subli.forEach(subItem => {
            subItem.classList.remove('on');
        })
        current.children[1].classList.add('on');

        $header.classList.remove(arrBg[menu_idx]);
        // 이전
        $header.classList.add(arrBg[idx]);
        // 현재
        console.log(arrBg[idx]);

        menu_idx = idx;
        console.log($gnbli);
        console.log(current.children[1]);
    })
});

$header.addEventListener('mouseleave', e => {
    $subli.forEach(subItem => {
        subItem.classList.remove('on');
    })

    $header.classList.remove(arrBg[menu_idx]);
})