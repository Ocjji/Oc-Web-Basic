const express = require("express");
const app = express();
const port = 3000;

// json 형태의 데이터를 해석
// 미들웨어
app.use(express.json());

const data = [
    { id: 1, name: "포카리", price: 1000, desc: "이온음료", imgURL: "/images/img1.jpg" },
    { id: 2, name: "이프로", price: 1200, desc: "이온음료", imgURL: "/images/img2.jpg" },
    { id: 3, name: "게토렉", price: 1500, desc: "이온음료", imgURL: "/images/img3.jpg" },
]

app.get("/products", (req, res) => {
    res.send({
        data: data
    });
})

app.get("/products/:id", (req, res) => {
    const no = req.params.id;
    // const no = parseInt(req.params.id);
    const { id, name, price, desc, imgURL } = data[no - 1];
    res.send(`
        번호 : ${id}
        이름 : ${name}
        가격 : ${price}
        설명 : ${desc}
        이미지주소 : ${imgURL}
    `);
})

app.post("/products", (req, res) => {
    res.send("상품이 등록되었습니다");
})

app.listen(port, () => {
    console.log("서버 실행중...");
})