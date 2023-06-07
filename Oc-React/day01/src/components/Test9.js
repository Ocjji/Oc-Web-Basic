const Test9 = () => {
    const arr = ["보라돌이", "뚜비", "나나", "뽀", "아가햇님"];
    const data = [
        { id: 1, name: "보라돌이" },
        { id: 2, name: "뚜비" },
        { id: 3, name: "나나" },
        { id: 4, name: "뽀" },
        { id: 5, name: "아가햇님" }
    ];
    return (
        <div>
            <h2>반복문 map + key</h2>
            <ul>
                {
                    arr.map((item, idx) => {
                        return (
                            <li key={idx}>
                                {idx} / {item}
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <ul>
                {
                    arr.map((item, idx) => <li key={idx}>{idx}/{item}</li>)
                }
            </ul>
            <hr />
            <ul>
                {
                    arr.map((item, idx) => (
                        <li key={idx}>
                            {idx}/{item}
                        </li>)
                    )
                }
            </ul>
            <hr />
            <ul>
                {
                    data.map((item, idx) => <li key={idx}>
                        {idx}/{item.id}/{item.name}
                    </li>
                    )
                }
            </ul>
            <hr />
            <ul>
                {
                    data.map((item, idx) => {
                        const { id, name } = item;
                        return (
                            <li key={idx}>
                                {idx}/{id}/{name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Test9;