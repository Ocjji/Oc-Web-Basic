const mainInit = () => {
    common();
    nav_menu();
    news_tab();
    brand();
    familysite();
}
const get = (target) => {
    return document.querySelector(target);
}
const getAll = (target) => {
    return document.querySelectorAll(target);
}

const common = () => {
    let $link = getAll('a[href="#"]');
    let $goTop = get('.top');
    $link.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
        })
    })
    $goTop.addEventListener('click', e => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}

const nav_menu = () => {
    let $nav = get('#nav');
    let $menua = getAll('#nav .gnb > li > a');
    let $menuul = getAll('#nav .gnb > li > ul');
    let $close = get('#nav .close');
    let $bg = get('.bg');
    let $body = get('body');
    let $allmenu = get('.all-menu');

    $allmenu.addEventListener('click', e => {
        $nav.classList.add('on');
        $bg.classList.add('on');
        $body.style.overflow = 'hidden';
    })
    $bg.addEventListener('click', e => {
        $nav.classList.remove('on');
        $bg.classList.remove('on');
        $body.style.overflow = 'visible';
        setTimeout(() => {
            $menuul.forEach(menu => {
                menu.classList.remove('on');
            })
        }, 300)
    })
    $close.addEventListener('click', e => {
        $nav.classList.remove('on');
        $bg.classList.remove('on');
        $body.style.overflow = 'visible';
        setTimeout(() => {
            $menuul.forEach(menu => {
                menu.classList.remove('on');
            })
        }, 300)
    })

    $menua.forEach(item => {
        item.addEventListener('click', e => {
            let el = e.currentTarget;
            $menuul.forEach(menu => {
                menu.classList.remove('on');
            })
            el.nextElementSibling.classList.add('on');
        })

    })

}

const news_tab = () => {
    let $li = getAll('.main .news .news-tab li');
    let $box = getAll('.main .news .box');
    let current = 0;
    let old = 0;
    $li.forEach(itemLi => {
        itemLi.addEventListener('click', e => {
            let el = e.currentTarget;
            current = el.dataset.id;
            console.log($li);
            $li[old].classList.remove('on');
            $li[current].classList.add('on');
            $box[old].classList.remove('on');
            $box[current].classList.add('on');
            old = current;
        })
    })
}

const brand = () => {
    let $ul = get('.main .brand .brand-logo ul');
    let $li = get('.main .brand .brand-logo ul li');
    let $mask = get('.main .brand .brand-logo');
    let step = 1;
    let size = 0;
    let position_interval = 0;
    let left_x = null;

    size = parseInt(getComputedStyle($li).width) * -7;
    console.log(size);
    setInterval(() => {
        left_x = getComputedStyle($ul).left;
        if (left_x <= size) {
            $ul.style.left = `0px`;
            position_interval = 0;
        } else {
            position_interval -= step;
            $ul.style.left = `${position_interval}px`;
        }
    }, 20);
}

const familysite = () => {
    let $title = get('.site .inner .title');
    let $ul = get('.site .inner ul');
    let $ai = get('.site .inner .title i');
    let isPlay = false;

    $title.addEventListener('click', e => {
        $ul.classList.toggle('on');
        isPlay = $ul.classList.contains('on');

        if (isPlay) {
            $ai.classList.replace('xi-angle-down', 'xi-angle-up');
        } else {
            $ai.classList.replace('xi-angle-up', 'xi-angle-down');
        }
    })
}

(() => {
    mainInit();
})()

