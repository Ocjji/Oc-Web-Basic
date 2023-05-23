; (() => {
    const get = target => document.querySelector(target);
    const getAll = target => document.querySelectorAll(target);

    const slides = getAll('.slide');
    const next = get('.next');
    const prev = get('.prev');



    class Banner {
        timer = null;
        interval = 2000;
        auto = true;
        constructor() {
            // 아무값도 안 넣음
        }
        init() {
            // 처음 실행시 불러올 값
            if (this.auto) {
                this.timer = setInterval(this.nextSlide, this.interval);
            }

            // 버튼실행
            next.addEventListener('click', e => {
                this.nextSlide();
                if (this.auto) {
                    clearInterval(this.timer);
                    this.timer = setInterval(this.nextSlide, this.interval);
                }
            });

            prev.addEventListener('click', e => {
                this.prevSlide();
                if (this.auto) {
                    clearInterval(this.timer);
                    this.timer = setInterval(this.nextSlide, this.interval);
                }
            });

        }
        nextSlide() {
            const current = document.querySelector('.current');
            current.classList.remove('current');
            if (current.nextElementSibling) {
                current.nextElementSibling.classList.add('current');
            } else {
                slides[0].classList.add('current');
            }
        }
        prevSlide() {
            const current = document.querySelector('.current');
            current.classList.remove('current');
            if (current.previousElementSibling) {
                current.previousElementSibling.classList.add('current');
            } else {
                slides[slides.length - 1].classList.add('current');
            }
            setTimeout(() => current.classList.remove('current'), 200);
        }
    }
    const banner = new Banner();
    banner.init();
})();



