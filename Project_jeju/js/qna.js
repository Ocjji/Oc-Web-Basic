const qnaArrListTitle = [
    '여권의 유효기간은 반드시 6개월 이상 남아있어야 하나요?',
    '여행계약서는 꼭 동의해야 하나요?',
    '여행계약서란 무엇인가요?'
];
const qnaArrListAns = [
    '<p>대부분의 여행 지역은 탑승일 기준으로 여권의 유효기간이 6개월 이상 남아있도록 하는 것을 권장하고 있습니다.&nbsp;</p><p><br></p><p>여권의 유효기간이 여유 있지 않은 경우 현지 공항의 출입국 사무소 직원의 판단 하에 입국에 문제가 생길 수 있는 등,</p><p>예상치 못한 문제들이 발생될 수 있으므로 문제의 소지 없도록 당사에서는 6개월 이상으로 안내 드리고 있는 점 참고 부탁드리겠습니다.</p>',
    '<p>여행계약서는 여행 출발전까지 동의해야 합니다.</p><p><br></p><p>또한 예약한 여행 상품에 변경 사항이 발생할 경우 재발송 되며 수신한 여행계약서는 모두 여행자 본인의 확인 및 동의가 필요합니다.</p><p><br></p><p>동의한 여행계약서는 여행이 종료되는 귀국일까지 언제든지 확인이 가능합니다.</p>',
    '<p>"여행계약서"란 여행사를 통해 여행 상품을 예약/결제한 경우 이에 필요한 여러가지 제반 사항 및 의무 사항을 규정한 내용을 적은 계약 문서입니다.</p><p><br></p><p>하나투어는 고객님과의 여행 계약이 이루어졌을 때 이와 관련하여 제공되는 내용을 적은 문서 즉, 여행계약서를 교부하고 있으며 교부 시 여행 일정표 및 여행 약관 등도 함께 포함하고 있습니다. 해당내용을 확인하시고 동의를 해주시면 됩니다.</p>'

];

const qnaList = document.querySelector('.qna-list'); // 질문 리스트
const qnaLi = document.querySelectorAll('.qna-list li');
let old = 0;
// qnaList.children[0].innerHTML = `<strong>${qnaArrListTitle[0]}</strong><div>${qnaArrListAns[0]}</div></li>`;
// qnaList.children[1].innerHTML = `<strong>${qnaArrListTitle[1]}</strong><div>${qnaArrListAns[1]}</div></li>`;
// qnaList.children[2].innerHTML = `<strong>${qnaArrListTitle[2]}</strong><div>${qnaArrListAns[2]}</div></li>`;

for (let i = 0; i < 10; i++) {
    qnaList.children[i].innerHTML = `<strong>${qnaArrListTitle[i]}</strong><div>${qnaArrListAns[i]}</div></li>`;
}

qnaLi.forEach((element, idx) => {
    element.addEventListener('click', e => {
        if (e.currentTarget.classList.contains('on')) {
            e.currentTarget.classList.remove('on');
        } else {
            qnaLi.forEach(element => {
                element.classList.remove('on');
            })
            e.currentTarget.classList.add('on');
        }
    })
})