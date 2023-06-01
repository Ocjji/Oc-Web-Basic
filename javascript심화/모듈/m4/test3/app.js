import { ran, obj } from './module/data.js';
import showList from './module/showList.js';
import get from './module/getEle.js';

const btn = get('.btn');
const container = get('.container');

btn.addEventListener('click', e => {
    container.innerHTML = showList(ran, obj);
})