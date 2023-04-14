let next = document.querySelector('.naver .num-box .next');
let prev = document.querySelector('.naver .num-box .prev');
let dom = document.querySelectorAll('.naver .con-box article');
let current = document.querySelector('.naver .num-box .current');
let total = document.querySelector('.naver .num-box .total');

let timerId = null;
let interval = 1000;
let cnt = 0;
let size = dom.length;
let view = cnt + 1;
current.textContent = view;
total.textContent = size;

const banner = () => {
    dom.forEach(item => {
        item.style.display = 'none';
    })
    dom[cnt].style.display = 'block';
    view = cnt + 1;
    current.textContent = view;
}

timerId = setInterval(make, interval);
function make() {
    cnt++;
    if (cnt > size - 1) {
        cnt = 0;
    }
    banner();
}

next.addEventListener('click', (e) => {
    cnt++;
    if (cnt > size - 1) {
        cnt = 0;
    }
    banner();
    clearInterval(timerId);
    timerId = setInterval(make, interval);
});
prev.addEventListener('click', (e) => {
    cnt--;
    if (cnt < 0) {
        cnt = 4;
    }
    banner();
    clearInterval(timerId);
    timerId = setInterval(make, interval);
});

