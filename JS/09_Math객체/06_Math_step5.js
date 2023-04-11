'use strict';

setInterval(() => {
    let color1 = Math.random() * 0xffffff;
    let num = 0xffffff;

    if (color1 < num) {
        color1 = Math.floor(color1).toString(16);
    }
    console.log(`#${color1}`);
}, 1000);