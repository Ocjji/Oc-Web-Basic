'use strict';

// 즉시실행함수
; (function () {
    // 안에 코드 작성
    const get = (target) => {
        return document.querySelector(target);
    }
    const getAll = (target) => {
        return document.querySelectorAll(target);
    }
})();

window.get = get;
window.getAll = getAll;