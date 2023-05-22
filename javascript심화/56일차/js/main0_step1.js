const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const view = document.querySelector('.view');
const output = document.querySelector('.output');
let timer = null, count = 1, interval = 1000;

const obj = {
    color: 'blue',
    backgroundColor: 'yellow'
};
// 구조분해
const { color, backgroundColor } = obj;
view.style.color = color;
view.style.backgroundColor = backgroundColor;

//시작 -> 1초단위로 숫자가 증가 시작은 0부터 현재시간+시작 make()
startBtn.addEventListener('click', e => {
    if (timer === null) {
        view.textContent = count;
        timer = setInterval(() => {
            count++;
            view.textContent = count;
        }, interval);
    }
    make('시작'); // make(message)
})
//중지 - 현재시간 + 중지 make()
stopBtn.addEventListener('click', e => {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
    make('중지');
})
//화면에 출력부분 공통
function make(message) {
    const div = document.createElement('div');
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    div.innerText = `${h}시 ${m}분 ${s}초 ${message}`;
    div.classList.add('msg');
    output.append(div);
}
