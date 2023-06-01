import { get, getAll } from './getElement.js';
function makeList(data) {
    let content = data.map(element => {
        return `<div class="view-box" data-id="${element.id}">
        <div class="img-box">
            <img src="../images/img${element.id}.png" alt="${element.name}">
        </div>
        <div class="des-box">
            <ul>
                <li>이름 : ${element.name}</li>
                <li>역할 : ${element.job}</li>
                <li>전화 : ${element.tel}</li>
            </ul>
        </div>
        <button class="btn-like"><i class="xi-heart-o"></i></button>
    </div>`;
    }).join('');
    return content;
}
function addEventLike() {
    let btnLike = getAll('.btn-like i');
    btnLike.forEach(element => {
        element.addEventListener('click', e => {
            if (e.currentTarget.classList.contains('xi-heart')) {
                e.currentTarget.classList.replace('xi-heart', 'xi-heart-o');
            } else if (e.currentTarget.classList.contains('xi-heart-o')) {
                e.currentTarget.classList.replace('xi-heart-o', 'xi-heart');
            }
        })
    })
}

export { makeList, addEventLike };