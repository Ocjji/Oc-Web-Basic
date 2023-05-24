const prev = document.querySelector('.banner-wrap .btn-wrap .prev');
const next = document.querySelector('.banner-wrap .btn-wrap .next');
const banner = document.querySelector('.banner-wrap .banner');
const bannerli = document.querySelectorAll('.banner-wrap .banner li');
const pagingli = document.querySelectorAll('.banner-wrap .paging li');
let current = 0, old = 0, size = 600, len = bannerli.length;

class Gallery {
    constructor() {

    }
    init() {
        next.addEventListener('click', (e) => {
            this.nextSlide();
        })
        prev.addEventListener('click', (e) => {
            this.prevSlide();
        })
        pagingli.forEach(item => {
            item.addEventListener('click', (e) => {
                this.paging(e);
            })
        })
    }
    nextSlide() {
        current++;
        if (current > len - 1) {
            current = 0;
        }
        banner.style.transform = `translateX(${-size * current}px)`;
        pagingli[old].classList.remove('on');
        pagingli[current].classList.add('on');
        old = current;
    }
    prevSlide() {
        current--;
        if (current < 0) {
            current = len - 1;
        }
        banner.style.transform = `translateX(${-size * current}px)`;
        pagingli[old].classList.remove('on');
        pagingli[current].classList.add('on');
        old = current;
    }
    paging(clickedpage) {
        let el = clickedpage.currentTarget;
        current = el.dataset.num;
        pagingli[old].classList.remove('on');
        el.classList.add('on');
        banner.style.transform = `translateX(${-size * current}px)`;
        old = current;
    }
}
const gallery = new Gallery();
gallery.init();






