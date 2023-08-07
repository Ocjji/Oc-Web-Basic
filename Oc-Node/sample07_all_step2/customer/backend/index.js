const express = require('express');
const cors = require('cors');
const customerRouter = require("./routes/customer.router");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use("/customer", customerRouter);

// app.get('/customer', (req, res) => {
//   res.send (data)
// })


// app.delete('/customer/:id', (req, res ) => {
//   data = data.filter(item => item.id !== Number(req.params.id));   
//   res.send( data )
// });

// app.post('/customer', (req, res ) => { 
//   const { name,addr  } = req.body ; 

//    console.log( name,addr )
//      const item = {                
//        id: no++,            
//        name,
//        addr
//    }

//    data.push(item);  
//    res.send(data);  
//  });



// app.post('/custom/:id', (req, res) => {    
//   const item = data.find( item =>  item.id === Number(req.params.id) ); 
//   res.send (item);            
// });

// app.put('/update/:id', (req, res) => {    
//   let customer = req.body 
//   data = data.map( item =>  item.id === customer.id ? customer : item  );
//   res.send (data );            
// });

app.listen(port, () => {
  console.log('서버 접속 완료')
})