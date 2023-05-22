; (() => {
    const get = target => document.querySelector(target);

    const $startBtn = get('.start');
    const $stopBtn = get('.stop');
    const $view = get('.view');
    const $output = get('.output');
    let timer = null, count = 1, interval = 1000;


    class StopTimer {
        constructor(obj = {}) { // 값이 넘어오지 않을 경우를 대비하여 '= {}'를 붙임
            this.obj = obj;
            this.timer = null;
        }
        // 초기화 메서드 
        init() {
            // alert('초기화');
            let { color, backgroundColor } = this.obj;
            color = color || 'green'; // 값이 없을 경우를 대비하여 설정
            backgroundColor = backgroundColor || 'red'; // 값이 없을 경우를 대비하여 설정
            $view.style.color = color;
            $view.style.backgroundColor = backgroundColor;
            // start 버튼 클릭시
            $startBtn.addEventListener('click', e => {
                this.start();
            })
            // stop 버튼 클릭시
            $stopBtn.addEventListener('click', e => {
                this.stop();
            })

        }
        start() {
            let count = 0;
            if (this.timer === null) {
                $view.textContent = count;
                this.timer = setInterval(() => {
                    count++;
                    $view.textContent = count;
                }, 1000);
            }
            this.make('시작');
        }
        stop() {
            if (this.timer !== null) {
                clearInterval(this.timer);
                this.timer = null;
            }
            this.make('중지');
        }
        make(message) {
            const div = document.createElement('div');
            const now = new Date();
            const h = now.getHours();
            const m = now.getMinutes();
            const s = now.getSeconds();
            div.innerText = `${h}시 ${m}분 ${s}초 ${message}`;
            div.classList.add('msg');
            $output.append(div);
        }
    } // end StopTimer

    const obj = {
        color: 'blue',
        backgroundColor: 'yellow'
    }

    const stoptimer = new StopTimer();
    stoptimer.init();
})();