const mainInit = () => {
    common();
    nav_menu();
}
const get = (target) => {
    return document.querySelector(target);
}
const getAll = (target) => {
    return document.querySelectorAll(target);
}
const common = () => {
    let $links = getAll('a[href="#]');
    $links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
        })
    })
}
const nav_menu = () => {
    let $body = get('body');
    let $allmenu = get('.all-menu');
    let $nav = get('#nav');
    let $bg = get('.bg');
    let $menuClose = get('.close');
    let $menua = getAll('#nav .gnb>li>a');
    let $menuul = getAll('#nav .gnb>li>ul');
    console.log($menua);
    console.log($menuul);
    $allmenu.addEventListener('click', e => {
        $nav.classList.add('on');
        $bg.classList.add('on');
        // $body.style.overflow = 'hidden';
    })
    $menuClose.addEventListener('click', e => {
        $nav.classList.remove('on');
        $bg.classList.remove('on');
        // $body.style.overflow = 'visible';
    })
    $bg.addEventListener('click', e => {
        $nav.classList.remove('on');
        $bg.classList.remove('on');
        // $body.style.overflow = 'visible';
    })
    $menua.forEach((element, idx) => {
        element.addEventListener('click', e => {
            $menuul.forEach(element => {
                element.classList.remove('on');
            })
            $menuul[idx].classList.add('on');
        })
    })
}

(() => {
    mainInit();
})()

var swiper = new Swiper(".mainVisual", {
    loop: true,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".brand-list", {
    pagination: {
        el: ".swiper-pagination",
    },
});