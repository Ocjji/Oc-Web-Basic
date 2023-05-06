const get = (target) => document.querySelector(target);
const getAll =(target) => document.querySelectorAll(target);

const $pack_menu_li = getAll('.packCon .packCon_main_menu li');
// const $packmain_con = getAll('.packCon .packCon_main_con');
const $packmain_con_li = getAll('.packCon .packCon_main_con li a');
const $city_jeju = get('.packCon .city_jeju');
const $city_jeju_li = getAll('.packCon .city_jeju li');
const $city_seo = get('.packCon .city_seo');
const $city_seo_li = getAll('.packCon .city_seo li');
const $packCon_main_con = get('.packCon .packCon_main_con');
const $packCon_main_icon_li = getAll('.packCon .packCon_main_con li');
const $pack_pop_bg = get('.packCon .pack_pop_bg');
const $pack_pop_bg_li = getAll('.packCon .pop_bg li');
const $pack_popup = get('.packCon .pack_popup');
const $pack_close = getAll('.packCon .close');
const $pack_popin_li = getAll('.packCon .txt .pop_in li');
const $pack_info_li = getAll('.packCon .txt .info li');
const $pack_more = get('.packCon .more');
const $pack_pop_btn = getAll('.packCon .pack_popup .txt button');
let pack_top, pack_cnt=0;
// apck_menu(전체/제주시/서귀포시)

pack_more();
city_jeju();
city_seo();

// 상세보기&검색아이콘 띄우기
$packmain_con_li.forEach((ele,idx)=>{
    let pac_div = document.createElement('div');
    let pac_i = document.createElement('i');
    let pac_p = document.createElement('p');
    ele.addEventListener('mouseenter',e=>{
        $packmain_con_li[idx].append(pac_div);
        pac_div.classList.add('ho');
        pac_div.append(pac_i);
        pac_div.append(pac_p);
        pac_i.classList.add('xi-zoom-in');
        pac_p.textContent = '상세보기';
    })
    ele.addEventListener('mouseleave',e=>{
        pac_div.remove()
        pac_i.remove();
        pac_p.remove();
    })
})

    // pack_더보기 버튼
    $packCon_main_con.style.height = '760px'
    function pack_more(){
        $pack_more.addEventListener('click',e=>{
            $pack_more.classList.add('off');
            $packCon_main_con.style.height = '100%'
        })
    }
    //제주시 클래스명 붙
    function city_jeju(){
        $city_jeju_li.forEach((item, idx)=>{
            item.classList.remove('on');
            item.classList.add('on');
        })
    }
    //서귀포시 클래스명 붙
    function city_seo(){
        $city_seo_li.forEach((item, idx)=>{
            item.classList.remove('on');
            item.classList.add('on');
        })
    }

//전체 버튼 누르기
$pack_menu_li[0].addEventListener('click',e=>{
    $pack_menu_li.forEach(item=>{
        item.classList.remove('on');
    })
    e.currentTarget.classList.add('on');
    city_jeju();
    city_seo();
    pack_more();
    $pack_more.classList.remove('off');
    $packCon_main_con.style.height = '760px'
})
//제주시 버튼 누르기
$pack_menu_li[1].addEventListener('click',e=>{
    $pack_menu_li.forEach(item=>{
        item.classList.remove('on');
    })
    e.currentTarget.classList.add('on');
    city_jeju();
    $city_seo_li.forEach((item, idx)=>{
        item.classList.remove('on');
    })
    $pack_more.classList.add('off');
    $packCon_main_con.style.height = '760px'
})
//서귀포시 버튼누르기
$pack_menu_li[2].addEventListener('click',e=>{   
    $pack_menu_li.forEach(item=>{
        item.classList.remove('on');
    })
    e.currentTarget.classList.add('on');
    city_seo();
    $city_jeju_li.forEach((item, idx)=>{
        item.classList.remove('on');
    })
    $pack_more.classList.add('off');
})


// pack_popup창 열기
window.addEventListener('scroll',e=>{
    pack_top=document.documentElement.scrollTop;
})
$packCon_main_icon_li.forEach((ele, idx)=>{
    ele.addEventListener('click',e=>{
        $pack_popup.style.top=`${pack_top-400}px`;
        //링크막기
        e.preventDefault();
        $pack_pop_bg.classList.add('on');
        $pack_popup.classList.add('on');
    //클릭한 content와 동일한 popup-content 띄우기
        // - 제목
        $pack_pop_bg_li.forEach(item=>{
            item.classList.remove('on');
        })
        $pack_pop_bg_li[idx].classList.add('on');
        // - 사진
        $pack_popin_li.forEach(item=>{
            item.classList.remove('on');
        })
        $pack_popin_li[idx].classList.add('on');
        // - 소개내용
        $pack_info_li.forEach(item=>{
            item.classList.remove('on');
        })
        $pack_info_li[idx].classList.add('on');

    })
})

// pack_popup창 닫기
$pack_close.forEach(ele=>{
    ele.addEventListener('click',e=>{
        $pack_pop_bg.classList.remove('on');
        $pack_popup.classList.remove('on');
    })
})

//popup버튼 깜빡이기
setInterval(function(){
    pack_cnt++;
    if(pack_cnt>$pack_pop_btn.length-1){
        pack_cnt=0;
    }
    $pack_pop_btn.forEach(ele=>{
        ele.style.display='none'
    })
    $pack_pop_btn[pack_cnt].style.display='block'
},500)
