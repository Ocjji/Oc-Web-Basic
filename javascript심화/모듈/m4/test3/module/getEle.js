export default function (target) {
    const ele = document.querySelector(target);
    if (ele) {
        return ele;
    } else {
        throw Error('선택한 요소가 존재하지 않습니다.');
    }
}