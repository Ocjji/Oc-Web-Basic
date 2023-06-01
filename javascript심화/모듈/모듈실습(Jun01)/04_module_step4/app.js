import data from './module/data.js';
import { get, getAll } from './module/getElement.js';
import { makeList, addEventLike } from './module/functions.js';

const container = get('.container');
const remove = get('.remove');
const reset = get('.reset');

container.innerHTML = makeList(data);
addEventLike();

remove.addEventListener('click', e => {
    container.innerHTML = null;
})
reset.addEventListener('click', e => {
    container.innerHTML = makeList(data);
    addEventLike();
})