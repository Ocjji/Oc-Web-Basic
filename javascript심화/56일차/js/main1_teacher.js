; (function () {
    const get = (target) => document.querySelector(target);
    const getAll = (target) => document.querySelectorAll(target);

    const $prev = get('.banner-wrap .btn-wrap .prev');
    const $next = get('.banner-wrap .btn-wrap .next');
    const $banner = get('.banner-wrap .banner');
    const $bannerli = getAll('.banner-wrap .banner li');
    const $pagingli = getAll('.banner-wrap .paging li');

    class Gallery {
        constructor() {
            this.current = 0;
            this.old = 0;
            this.size = 600;
            this.len = $bannerli.length;
        }
        init() {
            $next.addEventListener('click', (e) => {
                this.nextMove();
            })
            $prev.addEventListener('click', (e) => {
                this.prevMove();
            })
            $pagingli.forEach(item => {
                item.addEventListener('click', (e) => {
                    this.pagingMove(e);
                })
            })
        }//end init
        banner() {
            $banner.style.transform = `translateX(${-this.size * this.current}px)`;
            $pagingli[this.old].classList.remove('on');
            $pagingli[this.current].classList.add('on');
            this.old = this.current;
        } // 공통
        nextMove() {
            this.current++;
            if (this.current > this.len - 1) {
                this.current = 0;
            }
            this.banner();
        } //end nextMove
        prevMove() {
            this.current--;
            if (this.current < 0) {
                this.current = this.len - 1;
            }
            this.banner();
        }//end prevMove
        pagingMove(e) {
            let el = e.currentTarget;
            this.current = el.dataset.num;
            this.banner();
        }//end pagingMove
    }
    const gallery = new Gallery();
    gallery.init();
})()