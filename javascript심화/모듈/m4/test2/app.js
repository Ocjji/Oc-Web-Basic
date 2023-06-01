import { ran, obj } from './module/data.js';
import showList from './module/showList.js';

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', e => {
    container.innerHTML = showList(obj);
    container.innerHTML += '++++++++++++++++++++++++';
    container.innerHTML += `<p>이름 : <strong>${obj[ran].name}</strong>, 직업 : <strong>${obj[ran].job}</strong></p>`;
})