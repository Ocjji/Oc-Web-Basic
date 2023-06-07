const Test10Tbody = () => {
    const arr = [
        { id: 1, name: "진기주", age: 20, addr: "서울", isAgree: true },
        { id: 2, name: "김동욱", age: 22, addr: "제주", isAgree: true },
        { id: 3, name: "서지혜", age: 25, addr: "경기", isAgree: false },
        { id: 4, name: "이원정", age: 21, addr: "부산", isAgree: true },
        { id: 4, name: "지혜원", age: 26, addr: "울산", isAgree: false },
        { id: 4, name: "김예지", age: 25, addr: "전주", isAgree: false }
    ];
    return (
        <>
            <tbody>
                {
                    arr.map((item, idx) => {
                        const { id, name, age, addr, isAgree } = item;
                        return (
                            <tr key={idx}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>{addr}</td>
                                <td>{isAgree ? "동의" : "비동의"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </>
    );
};

export default Test10Tbody;