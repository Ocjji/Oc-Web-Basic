'use strict';

// 비주얼 배너
const mainVisual = document.querySelector('.main-visual');
const mainVisualBanner = document.querySelector('.mainVisualBanner');
const mainVisualBannerLi = document.querySelectorAll('.mainVisualBanner li');
const btnVisualPrev = document.querySelector('.visualPrev');
const btnVisualNext = document.querySelector('.visualNext');
const currentPage = document.querySelector('.currentPage');
const mainBannerRollingBtn = document.querySelector('.visualNavPlay button');
const freeTravelList = document.querySelector('.free-travel-list');
const btnFreeTravelPrev = document.querySelector('.free-travel-prev');
const btnFreeTravelNext = document.querySelector('.free-travel-next');
const bestGoodsNavLi = document.querySelectorAll('.best-goods .goods-nav li');
const bestGoodsViewLi = document.querySelectorAll('.best-goods .goods-view li');
const recommendLeftLi = document.querySelectorAll('.left-side-nav-list li');
const recommendRightUl = document.querySelectorAll('.right-side-content ul');

console.log(bestGoodsNavLi);
console.log(recommendRightUl);
console.log(recommendLeftLi);

let visualLeft = -600;
let mainBannerCurrent = 1;
let totalBannerImage = mainVisualBannerLi.length;
let size = 600;
let mainBannerisPlay = true;
let mainBannerTimer = null;
const mainBannerInterval = 3000;

let FreeTravelListLeft = 0;

const banner_index = () => {
    currentPage.innerHTML = `${mainBannerCurrent} / 7`;
}
const mainBanner_next = () => {
    mainVisualBanner.style.transition = '0.2s';
    mainBannerCurrent++;
    visualLeft -= 600;
    mainVisualBanner.style.left = visualLeft + 'px'
    if (mainBannerCurrent === 8) {
        mainBannerCurrent = 1;
        visualLeft = -600;
        setTimeout(() => {
            mainVisualBanner.style.transition = '0s';
            mainVisualBanner.style.left = visualLeft + 'px';
        }, 100);
    }
    banner_index();
    mainBanner_bg(mainBannerCurrent);
}
const mainBanner_prev = () => {
    mainVisualBanner.style.transition = '0.2s';
    mainBannerCurrent--;
    visualLeft += 600;

    mainVisualBanner.style.left = visualLeft + 'px'
    if (mainBannerCurrent === 0) {
        mainBannerCurrent = 7;
        visualLeft = -4200;
        setTimeout(() => {
            mainVisualBanner.style.transition = '0s';
            mainVisualBanner.style.left = visualLeft + 'px';
        }, 100);
    }
    banner_index();
    mainBanner_bg(mainBannerCurrent);
}
const mainBanner_bg = (idx) => {
    switch (idx) {
        case 1: mainVisual.style.background = 'skyblue'; break;
        case 2: mainVisual.style.background = '#70c7ca'; break;
        case 3: mainVisual.style.background = '#327ab4'; break;
        case 4: mainVisual.style.background = '#6e87da'; break;
        case 5: mainVisual.style.background = '#e6ec8d'; break;
        case 6: mainVisual.style.background = '#d1d1d1'; break;
        case 7: mainVisual.style.background = '#a75cef'; break;
    }
}
mainBannerTimer = setInterval(mainBanner_next, mainBannerInterval);

mainBannerRollingBtn.addEventListener('click', e => {
    if (mainBannerisPlay) {
        mainBannerRollingBtn.children[0].classList.replace('xi-pause', 'xi-play');
        clearInterval(mainBannerTimer);
    } else {
        mainBannerRollingBtn.children[0].classList.replace('xi-play', 'xi-pause');
        mainBannerTimer = setInterval(mainBanner_next, mainBannerInterval);
    }
    mainBannerisPlay = !mainBannerisPlay;
})

btnVisualNext.addEventListener('click', e => {
    mainBanner_next();
    if (mainBannerisPlay) {
        clearInterval(mainBannerTimer);
        mainBannerTimer = setInterval(mainBanner_next, mainBannerInterval);
    }
})
btnVisualPrev.addEventListener('click', e => {
    mainBanner_prev();
    if (mainBannerisPlay) {
        clearInterval(mainBannerTimer);
        mainBannerTimer = setInterval(mainBanner_next, mainBannerInterval);
    }
})

btnFreeTravelNext.addEventListener('click', e => {
    FreeTravelListLeft -= 305;
    if (FreeTravelListLeft < -2460) { FreeTravelListLeft = -2440; }
    freeTravelList.style.left = FreeTravelListLeft + 'px';
})

btnFreeTravelPrev.addEventListener('click', e => {
    FreeTravelListLeft += 305;
    if (FreeTravelListLeft > 0) { FreeTravelListLeft = 0; }
    freeTravelList.style.left = FreeTravelListLeft + 'px';
})

bestGoodsNavLi.forEach((element, idx) => {
    element.addEventListener('click', e => {
        bestGoodsNavLi.forEach(element => {
            element.classList.remove('on');
        })
        bestGoodsViewLi.forEach(element => {
            element.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
        bestGoodsViewLi[idx].classList.add('on');
    })
});

recommendLeftLi.forEach((element, idx) => {
    element.addEventListener('click', e => {
        recommendLeftLi.forEach(element => {
            element.classList.remove('on');
        })
        recommendRightUl.forEach(element => {
            element.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
        recommendRightUl[idx].classList.add('on');
    })
});
