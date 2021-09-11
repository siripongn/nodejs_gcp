const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send('<h1>      TESTING CI/CD</h1>  <h3>        Message: Successfully Practice</h3> <h4>        Ver. 2.9 <h4>');
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