const data = [
    { id: 1, name: '보라돌이' },
    { id: 2, name: '뚜비' },
    { id: 3, name: '나나' },
    { id: 4, name: '뽀' }
]
// 나나 --> 햇님
const data1 = data.map(item => {
    if (item.id === 3) {
        return {
            ...item, name: '햇님'
        };
    } else {
        return item;
    }
})
console.log(data1);

const data2 = data.map(item => item.id === 3 ? { ...item, name: '달님' } : item);
console.log(data2);