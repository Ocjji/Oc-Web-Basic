const getName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 2000);
    })
}

const showName = async () => {
    const result = await getName('홍길동');
    console.log(result);
}
showName();