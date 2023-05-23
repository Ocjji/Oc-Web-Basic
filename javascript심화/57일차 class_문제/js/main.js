; (() => {
    const get = target => document.querySelector(target);
    const getAll = target => document.querySelectorAll(target);

    const databaseImg = [
        { id: 0, title: "사진0 설명", url: "http://www.naver.com", src: "images/img0.jpg" },
        { id: 1, title: "사진1 설명", url: "http://www.nate.com", src: "images/img1.jpg" },
        { id: 2, title: "사진2 설명", url: "http://www.daum.net", src: "images/img2.jpg" },
        { id: 3, title: "사진3 설명", url: "http://www.google.com", src: "images/img3.jpg" },
        { id: 4, title: "사진4 설명", url: "http://www.naver.com", src: "images/img4.jpg" },
        { id: 5, title: "사진5 설명", url: "http://www.naver.com", src: "images/img5.jpg" }
    ];

    const $bigImg = get('.big-img img');
    const $bigImgTxt = get('.big-img p');
    const $list = get('.list');
    const $prev = get('.prev');
    const $next = get('.next');
    let $li = ''; // 전체를 연결해주기 위한 선언
    let $on = '';


    class Gallery {
        timer = null;
        interval = 4000;
        auto = true; // isPlay 처럼 상태변수 사용

        constructor(arrImgData = []) {
            this.arrImgData = arrImgData;
        }

        init() {
            this.makeThums(this.arrImgData);
            this.playBanner();

            $bigImg.addEventListener('mouseenter', e => {
                clearInterval(this.timer);
            });
            $bigImg.addEventListener('mouseleave', e => {
                this.playBanner();
            });
            $bigImg.addEventListener('click', e => {
                window.open(e.currentTarget.dataset.url);
            })

            $li.forEach(element => {
                element.addEventListener('click', e => {
                    $li.forEach(element => {
                        element.classList.remove('on');
                    });
                    e.currentTarget.classList.add('on')
                    $on = get('.on');
                    $bigImg.src = $on.children[0].src;
                    $bigImgTxt.textContent = $on.dataset.title;
                    $bigImg.dataset.url = $on.dataset.url;
                    this.playBanner();
                })
            });

            $next.addEventListener('click', e => {
                this.nextSlide();
                this.playBanner();
            });
            $prev.addEventListener('click', e => {
                this.prevSlide();
                this.playBanner();
            });
        }

        makeThums(arrData) {
            arrData.forEach(item => {
                let img = document.createElement('img');
                img.src = item.src;
                let li = document.createElement('li');
                li.dataset.id = item.id;
                li.dataset.title = item.title;
                li.dataset.url = item.url;
                li.append(img);
                $list.append(li);
            });
            $li = getAll('li');
            $li[0].classList.add('on');
            $bigImgTxt.textContent = $li[0].dataset.title;
            $bigImg.dataset.url = $li[0].dataset.url;
        }

        playBanner() {
            if (this.auto) {
                clearInterval(this.timer);
                this.timer = setInterval(this.nextSlide, this.interval);
            }
        }

        nextSlide() {
            const $onView = get('.on');
            $onView.classList.remove('on');
            if ($onView.nextElementSibling) {
                $onView.nextElementSibling.classList.add('on');
            } else {
                $li[0].classList.add('on');
            }
            $on = get('.on');
            $on.classList.add('on');
            $bigImg.src = $on.children[0].src;
            $bigImgTxt.textContent = $on.dataset.title;
            $bigImg.dataset.url = $on.dataset.url;
        }

        prevSlide() {
            const $onView = get('.on');
            $onView.classList.remove('on');
            if ($onView.previousElementSibling) {
                $onView.previousElementSibling.classList.add('on');
            } else {
                $li[$li.length - 1].classList.add('on');
            }
            $on = get('.on');
            $on.classList.add('on');
            $bigImg.src = $on.children[0].src;
            $bigImgTxt.textContent = $on.dataset.title;
            $bigImg.dataset.url = $on.dataset.url;
        }
    }

    const gallery = new Gallery(databaseImg);
    gallery.init();
})();