const bbsObj = {
    title: '공지사항',
    count: 5,
    item: [
        { id: 1, txt: '첫번째 게시물입니다.' },
        { id: 2, txt: '두번째 게시물입니다.' },
        { id: 3, txt: '세번째 게시물입니다.' },
        { id: 4, txt: '네번째 게시물입니다.' },
        { id: 5, txt: '다섯번째 게시물입니다.' }
    ]
}

// 게시판이름 : 
// 전체 게시물 수 : 
// 나머지 목록 : [1] 내용

const board = (obj) => {
    console.log(`게시판이름 : ${obj['title']}`);
    console.log(`전체 게시물 수 : ${obj['count']}`);
    let obj1 = Array.from(obj['item']);
    obj1.forEach(arr => {
        if (arr['id'] === 2) {
            arr = { ...arr, txt: '안녕하세요 저는 홍길동입니다.' }
        }
        console.log(`[${arr['id']}] ${arr['txt']}`);
    })
}
board(bbsObj);

