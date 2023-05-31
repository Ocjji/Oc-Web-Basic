const allMenu = document.querySelector('.all-menu');
const nav = document.querySelector('.nav');
let menuIsView = true;

allMenu.addEventListener('click',e=>{
    if(menuIsView){nav.style.display = 'none';}
    else {nav.style.display = 'block';}
    menuIsView = !menuIsView;
})

window.addEventListener('resize', function() {
    const width = window.innerWidth;
    if(width >= 601){
        nav.style.display = 'block';
        menuIsView = true;
    } else {
        nav.style.display = 'none';
        menuIsView = false;
    }
});