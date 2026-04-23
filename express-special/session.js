const expr = require('express')
const app = expr()
const ss = require('express-session')

app.use(ss({secret:'myKey'}))
app.use(expr.static('../public',{index:'login.html'}))
app.use(expr.urlencoded({extended:true}))

app.post('/login',(req,res)=>{
    req.session.username = req.body.username
    req.session.password = req.body.password
    res.redirect('../public/order.html')
})
app.post('/order',(req,res)=>{
    req.session.product = req.body.product
    req.session.quantity = req.body.quantity
    res.redirect('/summary')
})
app.get('/summary',(req,res)=>{
    res.write(`Username ${req.session.username}`)    
    res.write(`Product ${req.session.product}`)
    res.write(`Quantity ${req.session.quantity}`) 
    
    req.session.destroy()
    res.redirect('/')
})

app.listen(5678,()=>{console.log('Server started.')})