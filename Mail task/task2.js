const expr = require('express')
const app = expr()
nm = require('nodemailer')

app.use(expr.static('../public',{index:'task2.html'}))

app.get('/feedback',(req,res)=>{
    res.write(`<h1>Thank you for your feedback.</h1>`)

    trans = nm.createTransport({
    host:'smtp.gmail.com',
    port:465,
    auth:{
        user:'kevalm2air@gmail.com',
        pass:'wtsf ftzt pczq hsan'
    }
})

mailoption = {
    from:'kevalm2air@gmail.com',
    to:req.query.email,
    subject:'Feedback data',
    html:`
<h3>Name : ${req.query.name}</h3>      
<h3>Email : ${req.query.email}</h3>
<h3>Feedback : ${req.query.feedback}</h3>
<h3>Comments : ${req.query.comments}</h3>
    `
}

trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log(info)
    }
})

})




app.listen(5678,()=>{console.log('Server started')})
