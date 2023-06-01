import { ran, obj } from './module/data.js';

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const showList = () => {
    const newObj = obj.map(element => {
        // 비구조 할당
        const { name, job } = element;
        // 리턴
        return `<p>이름 : <strong>${name}</strong>, 직업 : <strong>${job}</strong></p>`;
    }).join('');
    console.log(newObj);
    container.innerHTML = newObj;
    container.innerHTML += '++++++++++++++++++++++++';
    container.innerHTML += `<p>이름 : <strong>${obj[ran].name}</strong>, 직업 : <strong>${obj[ran].job}</strong></p>`;
}

btn.addEventListener('click', e => {
    showList();
})