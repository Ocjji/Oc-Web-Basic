; (() => {
    const get = target => document.querySelector(target);
    const getAll = target => document.querySelectorAll(target);


    const $banner = get('.banner');
    const $next = get('.next');
    const $prev = get('.prev');
    let $slides = null;


    class Banner {
        timer = null;
        interval = 2000;
        auto = true;
        // 재생 / 일시정지 start / pause 버튼 사용시 편의를 위해
        constructor(arrData = []) {
            this.data = arrData;
        }
        init() {
            // data 슬라이드 생성
            this.makeSlide(this.data);

            // 처음 실행시 불러올 값
            if (this.auto) {
                this.timer = setInterval(this.nextSlide, this.interval);
            }

            // 버튼실행
            $next.addEventListener('click', e => {
                this.nextSlide();
                if (this.auto) {
                    clearInterval(this.timer);
                    this.timer = setInterval(this.nextSlide, this.interval);
                }
            });

            $prev.addEventListener('click', e => {
                this.prevSlide();
                if (this.auto) {
                    clearInterval(this.timer);
                    this.timer = setInterval(this.nextSlide, this.interval);
                }
            });

        }
        makeSlide(arr) {
            arr.forEach(item => {
                $banner.innerHTML += `
                <div class="slide">
                    <div class="box">
                        <h2>${item.title}</h2>
                        <p>${item.des}</p>
                    </div>
                </div>
                `;
            });

            $slides = getAll('.slide');
            $slides[0].classList.add('current');
        }

        nextSlide() {
            const current = document.querySelector('.current');
            current.classList.remove('current');
            if (current.nextElementSibling) {
                current.nextElementSibling.classList.add('current');
            } else {
                $slides[0].classList.add('current');
            }
        }
        prevSlide() {
            const current = document.querySelector('.current');
            current.classList.remove('current');
            if (current.previousElementSibling) {
                current.previousElementSibling.classList.add('current');
            } else {
                $slides[$slides.length - 1].classList.add('current');
            }
            setTimeout(() => current.classList.remove('current'), 200);
        }
    }
    const data = [
        { id: 1, title: '타이틀1', des: '111 설명입니다.' },
        { id: 2, title: '타이틀2', des: '222 설명입니다.' },
        { id: 3, title: '타이틀3', des: '333 설명입니다.' },
        { id: 4, title: '타이틀4', des: '444 설명입니다.' },
        { id: 5, title: '타이틀5', des: '555 설명입니다.' },
        { id: 6, title: '타이틀6', des: '666 설명입니다.' }
    ]

    const banner = new Banner(data);
    banner.init();
})();



