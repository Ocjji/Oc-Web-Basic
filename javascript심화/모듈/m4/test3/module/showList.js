const showList = (ran, obj) => {
    let newObj = obj.map(element => {
        // 비구조 할당
        const { name, job } = element;
        // 리턴
        return `<p>이름 : <strong>${name}</strong>, 직업 : <strong>${job}</strong></p>`;
    }).join('');
    newObj += '++++++++++++++++++++++++';
    newObj += `<p>이름 : <strong>${obj[ran].name}</strong>, 직업 : <strong>${obj[ran].job}</strong></p>`;
    return newObj;
};
export default showList;