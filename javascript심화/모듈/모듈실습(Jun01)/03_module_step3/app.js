import data from './module/data.js';
import { makeList, addEventLike } from './module/functions.js';

const container = document.querySelector('.container');
const remove = document.querySelector('.remove');
const reset = document.querySelector('.reset');

container.innerHTML = makeList(data);
addEventLike();

remove.addEventListener('click', e => {
    container.innerHTML = null;
})
reset.addEventListener('click', e => {
    container.innerHTML = makeList(data);
    addEventLike();
})