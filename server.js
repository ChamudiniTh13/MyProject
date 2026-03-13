const express = require("express");

const app = express();
const port = 3001;

let username = "";

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.post("/submit",(req,res)=>{

username = req.body.username;

res.redirect("/greeting");

});

app.get("/greeting",(req,res)=>{

res.send(`
<style>

body{
font-family:Arial;
background:#2b2b6f;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
}

.box{
background:white;
padding:40px;
border-radius:12px;
text-align:center;
box-shadow:0 8px 20px rgba(0,0,0,0.3);
}

a{
display:inline-block;
margin-top:20px;
text-decoration:none;
color:#5a55ff;
font-weight:bold;
}

</style>

<div class="box">

<h1>Hello, ${username}!</h1>

<a href="/">Go Back</a>

</div>
`)

})

app.listen(port,()=>{

console.log(`Server running at http://localhost:${port}`)

})