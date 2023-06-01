const showList = (obj) => {
    const newObj = obj.map(element => {
        // 비구조 할당
        const { name, job } = element;
        // 리턴
        return `<p>이름 : <strong>${name}</strong>, 직업 : <strong>${job}</strong></p>`;
    }).join('');
    return newObj;
};
export default showList;