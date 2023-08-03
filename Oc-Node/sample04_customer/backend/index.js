const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000;
app.use(express.json());
app.use(cors());


let data = [
  { id: 1, name: '김동욱', addr: '서울' },
  { id: 2, name: '진기주', addr: '제주' },
  { id: 3, name: '서지혜', addr: '부산' },
  { id: 4, name: '이원정', addr: '울산' },
  { id: 5, name: '김종수', addr: '경기' },
]

app.get('/customer', (req, res) => {
  res.send(data)
})


app.delete('/customer/:id', (req, res) => {
  data = data.filter(item => item.id !== Number(req.params.id));
  res.send(data)
});

let no = 6

app.post('/customer', (req, res) => {
  const { name, addr } = req.body;

  console.log(name, addr)
  const item = {
    id: no++,
    name,
    addr
  }

  data.push(item);
  res.send(data);
});



app.post('/custom/:id', (req, res) => {
  const item = data.find(item => item.id === Number(req.params.id));
  res.send(item);
});



app.put('/update/:id', (req, res) => {
  let customer = req.body
  data = data.map(item => item.id === customer.id ? customer : item);
  res.send(data);
});

app.listen(port, () => {
  console.log('서버 접속 완료')
})