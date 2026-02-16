//creating an server using express for login system
//acces denied error is because of cors policy we need to install cors package and use it in our server
const express = require("express")
const app = express()
const PORT = 4000
const cors = require("cors")

app.use(cors())
app.use(express.json())

dummyUsers = [
    {
        username:"john",
        password:"1234"
    },
    {
        username:"jane",
        password:"5678"
    }
]


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("api is working")
})

app.post("/login",(req,res)=>{
    const {username,password} = req.body
    const user = dummyUsers.find(u=>u.username === username && u.password === password)
    if(user){
        res.status(200).send("Login successful")
    }else{
        res.status(401).send("Invalid credentials")
    }
})
