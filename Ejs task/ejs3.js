const expr = require('express')
const app = expr()

app.use(expr.urlencoded({extended:true}))
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('ejs3_1')
})

app.post('/data',(req,res)=>{
    t1 = parseInt(req.body.t1)
    t2 = parseInt(req.body.t2)
    t3 = parseInt(req.body.t3)
    t4 = parseInt(req.body.t4)
    total = t1+t2+t3+t4

    res.render('ejs3_2',{t1,t2,t3,t4,total})
})

app.listen(5678,()=>{console.log('Server started')})