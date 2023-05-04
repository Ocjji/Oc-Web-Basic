// (function(){
    const get=(target)=>{
        return document.querySelector(target);
    }
    const getAll=(target)=>{
        return document.querySelectorAll(target);
    }

    const qnaBoardLi = document.querySelectorAll('.qna-list li');
    console.log(qnaBoardLi);
    qnaBoardLi.forEach(element =>{
        element.addEventListener('click', e=>{
            // console.log(e.currentTarget);
            console.log('click');
            qnaBoardLi.forEach(element => {
                element.classList.remove('on');
                element.children[1].classList.remove('on');
            });
            e.currentTarget.classList.add('on');
            e.currentTarget.children[1].classList.add('on');
        })
    })
// })();