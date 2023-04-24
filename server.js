const express = require('express')
const app = express();
const PORT =process.env.PORT || 3000
const cors= require('cors')





app.listen(PORT,()=>{
    console.log(`ServerApp is listen on Port ${PORT}` );
})
app.use(cors())

app.post("/",(req,res)=>{
    res.send("Welcome in my Profile")
})

app.get("/",(req,res)=>{
    return res.send(`Welcom in my serverApp <br/>
    strName= ${req.param("strName")}<br/>
    dtmDOB= ${req.param("dtmDOB")}<br/>
    strEmail=${req.param("strEmail")}<br/>
    strPassword=${req.param("strPassword")}<br/>
    
    `)
})

app.post("/login",(req,res)=>{
    res.send({
        isUserRegester :userlogin(req.body.strEmail,req.body.strPassword1)
    })
})

function userlogin(strEmail,strPassword1){
    if(strEmail.includes("MikeQgmail.com"),strPassword1.includes("Password1")){
        return true
    }else {
        return false
    }
}