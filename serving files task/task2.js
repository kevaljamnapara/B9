var expr = require("express");
var app = expr();

app.use(expr.static('../public',{index:'task1.html'}));

app.get("/login",(req,res,next)=>{
    console.log(req.query);
    res.set("content-type","text/html");
    res.write("<center><h1>Welcome " + req.query.name + "</h1>");
    res.write("<h2>Your email id is " + req.query.email + "</h2>");
    next();
});

app.get("/login",(req,res)=>{
    if(req.query.newsletter && req.query.newsletter == "on"){
        res.write("<h3>Thank you for your subscription</h3><a href='/'>Logout</a></center>");
    }else{
        res.write("<h3>You can subscribe to get daily updates</h3><a href='/subscribe'>Subscribe</a></center>");
    }
    res.end();
});

app.get("/subscribe",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<center><h3>Thank you for your subscription</h3><a href='/'>Logout</a></center>");
    res.end();
});

app.listen(5001,()=>{console.log('server started')});