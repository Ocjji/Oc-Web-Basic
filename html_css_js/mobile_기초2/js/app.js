(() => {
    mainInit();
})();

function mainInit() {
    nav_menu(); // 메뉴
    main_visual(); // 비주얼
    news_banner(); // 뉴스영역
}
function get(target) {
    return document.querySelector(target);
}
function getAll(target) {
    return document.querySelectorAll(target);
}
function nav_menu() {
    let $allMenu = get('#header .all-menu');
    let $nav = get('#nav');
    let $bg = get('.bg');
    let $close = get('#nav .close');
    let $menua = getAll('#nav .gnb>li>a');
    let $menuaul = getAll('#nav .gnb>li>ul');

    $allMenu.addEventListener('click', e => {
        $nav.classList.add('on');
        $bg.classList.add('on');
    })
    $close.addEventListener('click', e => {
        $nav.classList.remove('on');
        $bg.classList.remove('on');
    })
    $bg.addEventListener('click', e => {
        $nav.classList.remove('on');
        $bg.classList.remove('on');
    })
    $menua.forEach((element, idx) => {
        element.addEventListener('click', e => {
            $menuaul.forEach(item => {
                item.classList.remove('on');
            })
            $menuaul[idx].classList.add('on');
        })
    });
} // 메뉴
function main_visual() {
    var swiper = new Swiper("#mainVisual", {
        pagination: {
            el: ".swiper-pagination",
        },
    });
} // 비주얼
function news_banner() {
    var swiper = new Swiper(".news-banner", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} // 뉴스영역