const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

//====================================================tour_tour

const $tourVis_banner =  getAll('.tourVis .tour_banner li');
const $tourVis_paging =  getAll('.tourVis .tour_paging li');
const $tourCon_more = get('.tour .tourCon .more');
const $tour_info = get('.tour .tour_info');
const $tour_buy = getAll('.tour li .tour_price strong');
const $tour_info_a = getAll('.tour .tour_info li a');
let tour_cnt = 0, tour_old = 0, tour_timer = null , tour_interval = 3000, tour_buy_cnt=0;

//====================================================tour_tour

// 링크막기
$tour_info_a.forEach(ele=>{
    ele.addEventListener('click',e=>{
        e.preventDefault();

    })
})
//tour_banner 공통함수
function tour_bn(start, end) {
    $tourVis_banner[tour_old].style.left = start;
    $tourVis_banner[tour_old].style.zIndex = '1';
    $tourVis_banner[tour_cnt].style.left = end;
    $tourVis_banner[tour_cnt].style.zIndex = '10';
    tour_pagCol(tour_cnt)// rolling에 맞춰서 paging색변경
    tour_old = tour_cnt;
}
//배너 paging 컬러변경 함수
function tour_pagCol(num){
    $tourVis_paging.forEach(ele => {
        ele.classList.remove('on')
    })
    $tourVis_paging[num].classList.add('on')
}

//more 버튼
$tour_info.style.height= '1070px'
$tourCon_more.addEventListener('click',e=>{
    if($tour_info.style.height=== '3150px'){
        $tour_info.style.height= '100%';
        $tourCon_more.style.display='none'; 
    }else if($tour_info.style.height=== '2100px'){
        $tour_info.style.height= '3150px';
    }else if($tour_info.style.height==='1070px'){
        $tour_info.style.height= '2100px';
    }
})

//배너 paging버튼
$tourVis_paging.forEach((ele, idx) => {
    ele.addEventListener('click', e => {
        console.log(idx)
        if(idx>tour_cnt){
            while(idx>tour_cnt){
                $tourVis_banner.forEach(item => {
                    item.style.left = '100%';
                    item.style.zIndex = '1';
                })
                $tourVis_banner[tour_cnt].style.left = '0%'
                $tourVis_banner[tour_cnt].style.zIndex = '10';
                tour_cnt++;
                if (tour_cnt > $tourVis_banner.length -1) {
                    tour_cnt = 0
                }
                tour_bn('-100%', '0%');
                clearInterval(tour_timer);
                tour_timer = setInterval(tour_bn_roll, tour_interval);
            }
        }
        else{
            while(idx<tour_cnt){
                $tourVis_banner.forEach(item => {
                    item.style.left = '-100%';
                    item.style.zIndex = '1';
                })
                $tourVis_banner[tour_cnt].style.left = '0%'
                $tourVis_banner[tour_cnt].style.zIndex = '10';
                tour_cnt--;
                if (tour_cnt < 0) {
                    tour_cnt = $tourVis_banner.length -1
                }
                tour_bn('100%', '0%')
                clearInterval(tour_timer);
                tour_timer = setInterval(tour_bn_roll, tour_interval);
            }
        }
        tour_pagCol(idx);
        clearInterval(tour_timer);
        tour_timer = setInterval(tour_bn_roll, tour_interval);
    })
})



//tour_banner_rolling 롤링
function tour_bn_roll(){
    $tourVis_banner.forEach(ele=>{
        ele.style.transitionDuration='0.3s';
        ele.style.left = '100%';
        ele.style.zIndex = '1';
    })
    tour_cnt++;
    if( tour_cnt> $tourVis_banner.length -1){
        tour_cnt = 0;
    }
    $tourVis_banner[tour_cnt].style.left = '0%';
    $tourVis_banner[tour_cnt].style.zIndex = '10';
    tour_bn('-100%', '0%');
}
tour_timer = setInterval(tour_bn_roll, tour_interval);


