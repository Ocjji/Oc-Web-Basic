const coffe = (coffeName) => {
    return new Promise((resolve, reject) => {
        if (coffeName === '아메리카노') {
            resolve('아메리카노 주문 완료')
        } else {
            reject('해당 메뉴 품절')
        }
    })
}
coffe('아메리카노')
    .then(res => console.log(res))
coffe('바닐라라떼')
    .catch(rej => console.log(rej))
    .finally(() => console.log('-이젠커피-'))