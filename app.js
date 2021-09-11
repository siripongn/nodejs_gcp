const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send('<h1> TESTING</h1>  <h3> Message: Success</h3> <h4> Ver. 1.9 <h4>');
})

app.get('/more',(req,res)=>{
    res.send([
        {
        testId:'001',
        price:99
    },
    {
        testId:'002',
        price:88
    }
])

})

app.listen(port,()=>{
    console.log(`TEST ON PORT ${port}`);
})