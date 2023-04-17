'use strict';

let dom = document.querySelectorAll('.sns li strong');
let end, start = 0, cnt = 0, speed = 250, step;


// 각각의 end 값이 다르기 때문에 -- 여기서부터 forEach문
dom.forEach(element => {
    element.textContent = start;

    const counter = () => {
        end = element.dataset.num;
        cnt = Number(element.textContent);
        step = end / speed;
        if (cnt < end) {
            element.textContent = cnt + step;
            setTimeout(counter, 1);
        } else {
            element.textContent = end;
        }
    }
    counter();
});
