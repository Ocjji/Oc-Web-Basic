const  express  = require('express');
const  cors = require('cors');
const app = express() 
const port = 3000; 
app.use( express.json());
app.use(cors());


app.listen( port , () => {
  console.log('서버 접속 완료')
})

