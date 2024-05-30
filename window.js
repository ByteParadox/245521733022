const express=require('express');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const {Avgcal}=require('./Avgcal');
const app=express();
const PORT=process.env.PORT || 5000;
const ws=10;
var n=[];   
app.post('/numbers/:numberid',(req, res) => {
  const {numberid} = req.params;
  let {number}=req.body;   
 
  if (!isValidNumberId(numberid)) {
    return res.status(400).json({ error:'Number ID Invalid'});
  }

  number = Number(number);
  if (typeof n!=(number)||number<=0) {
    return res.status(400).json({ error:'Number value Invalid'});
  }
 
  n.push({id:numberid,value:number});
  if (n.length>ws) {
    n.shift();  
  }

  const average=Avgcal(n.map(n => n.value));
  res.json({ average });
});

function isValidNumberId(id) {
  return ['p','f','e','r'].includes(id);
}

const server=app.listen(PORT);
server.on('listening',() => {
  console.log(`Server is running on port ${PORT}`);
});
