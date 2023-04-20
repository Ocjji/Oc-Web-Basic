'use strict';

let txt = document.querySelector('.txt');
let info = document.querySelector('.info');
let name = document.querySelector('.name');
let team = document.querySelector('.team');
let btn = document.querySelectorAll('button');

let numbering = document.querySelectorAll('.inner li strong');
let end, start = 0, num = 0, speed = 250, step;

numbering.forEach(element => {
    element.textContent = start;

    const counter = () => {
        end = element.dataset.num;
        num = Number(element.textContent);
        step = parseInt(end / speed);
        if (num < end) {
            element.textContent = num + step;
            setTimeout(counter, 1);
        } else {
            element.textContent = end;
        }
    }
    counter();
});


let arrTxt = [
    '얼마전 식도관련 질환으로 수술받고 퇴원한 환자입니다. 입원해 있는 동안 김도훈 교수님은 회진때마다 궁금한 점에 대해 시원시원하게 대답해 주시고 걱정했던 부분들을 사전에 친절하게 설명해 주셨습니다. 교수님께서 신경써서 수술해주신 덕분에 연하곤란으로 2달동안 음식 섭취가 힘들었었는데 많이 회복되어 지금은 잘 먹고 있습니다. 담당 레지던트 선생님이셨던 진태양 선생님도 병실에 수시로 들러 친절하게 설명해 주시고 불편한 부분들을 빠르게 해결해 주셨습니다. 김도훈 교수님, 진태양 선생님...더보기',
    '어머니께서 담석으로 입원하셨습니다. 과거에 위절제술을 받아서 담석제거절차도 복잡했구요, 내과와 외과를 번갈아 가셔야했습니다. 코로나 때문에 보호자 1인만 드나들 수 있고 면회는 아예 금지되었습니다. 저희는 간병인이 병원 상황을 전해 주었습니다. 어머니는 고령에 몹시 불안해 하셨으나 두 선생님과 간호사님들, 그리고 여러 관계자님들 덕분에 무사히 수술을 마치고 지금은 퇴원하여 회복 중에 있습니다. 두 교수님 직접 뵙고 인사드려야 마땅하나 아쉬운대로 이렇게 글로나마 감사를 드리겠습니다...더보기',
    '안녕 하십니까. 저는 임영규 환자 가족입니다. 저희 아버지께서는 갑자스러운 심장 통증으로 부산 모 대학병원에 진료를 받고 있었습니다. 하지만 상태가 호전되지 않아서 개복 수술을 해야 한다는 말을 듣고 연세가 있으신 아버지께서 너무나도 불안해하셨는데 고민끝에 대한민국 최고의 의료진과 간호팀이 계시는 서울 아산병원에 입원해서 다시진료를 받아보기로 결심 했습니다. 지난주 아무런 연고가 없는 서울에 올라와 최고의 의료진께 어려운 시술을 잘받고 최고의 간호팀에게 회복을 기다리면서 간호를 받고 있습...더보기'
];

let arrName = [
    '의료진 : 유문원',
    '의료진 : 송태준',
    '직원 : 지민아'
];

let arrTeam = [
    '위장관외과, 안병원, 위암센터',
    '소화기내과,담도ㆍ췌장센터,소화기내시경센터',
    '심장병원 간호팀'
];

let cnt = 0;
let timer = null;
let size = arrName.length;
const interval = 3000;
let className = '';

txt.textContent = arrTxt[0];
name.textContent = arrName[0];
team.textContent = arrTeam[0];

timer = setInterval(rolling, interval);

function rolling() {
    cnt++;
    cnt = cnt % size;
    banner();
}

function banner() {
    info.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], 500);
    txt.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], 500);
    txt.textContent = arrTxt[cnt];
    name.textContent = arrName[cnt];
    team.textContent = arrTeam[cnt];

    btn.forEach(element => {
        element.classList.remove('on');
    });
    btn[cnt].classList.add('on');
}

btn.forEach(element => {
    element.addEventListener('click', e => {
        cnt = e.target.getAttribute('data-num');
        clearInterval(timer);
        banner();
        timer = setInterval(rolling, interval);
    })
});