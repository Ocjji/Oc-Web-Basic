'use strict';

let arrSTR = ['흡연이 건강에 미치는 영향과 금연방법', '과식, 어떻게 피할까?'];
let arrTxt = ['매번 금연을 선언하지만 성공했다는 사람은 찾아보기 힘들다. 금연이 의지력에 달린 문제라 생각하기 쉽지만 전 인내하는 것만으로는 금연에 성공하기 어렵다고 한다. 건강에 대한 우려 때문에 많은 흡연자들이 금연을 시도하고 있지만, 자신의 의지로 담배를 끊을 확률은 1년에 3~5% 에 불과할 정도로 낮다. 또한 2018년 시행된 연구에 따르면 국내에서...', '많은 사람들은 습관처럼 과식을 한다. 식사 시 폭식을 하는 경우, 하루에 여러 번 간식을 먹는 경우, 식당에서 욕심을 부려 너무 많은 음식을 먹는 경우, 파티에서 흥청망청 먹는 경우, 운전 중이나 책상에서 의식하지 않고 식사하는 경우 등 칼로리 과다 섭취의 위험에 빠지곤 한다. 영양 전문가이자 행동변화 전문가인 브라이언 완씽크 교수는 건강에 해로운...'];

let strong = document.querySelector('strong');
let txt = document.querySelector('.content p');
let article = document.querySelector('.article');
let content = document.querySelector('.content');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let bgi;

let cnt = 0;
let size = arrSTR.length;
let timer = null;
const interval = 3000;
let className = '';

timer = setInterval(rolling, interval);

function rolling() {
    cnt++;
    cnt = cnt % size;
    banner();
}

const gallery = (btnName) => {
    if (btnName === 'next') {
        cnt++;
        if (cnt > 1) {
            cnt = 0;
        }
    } else {
        cnt--;
        if (cnt < 0) {
            cnt = 1;
        }
    }
    banner();
}

function banner() {
    // 공통부분

    content.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], 500)
    article.style.backgroundImage = 'url(images/health-img' + cnt + '.png)';
    strong.textContent = arrSTR[cnt];
    txt.textContent = arrTxt[cnt];
}

next.addEventListener('click', e => {
    className = e.target.getAttribute('class');
    gallery(className);
    clearInterval(timer);
    timer = setInterval(rolling, interval);
});

prev.addEventListener('click', e => {
    className = e.target.getAttribute('class');
    gallery(className);
    clearInterval(timer);
    timer = setInterval(rolling, interval);
});