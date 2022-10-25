const express = require("express");
const port = process.env.PORT||3000;
const profileRouter=require('./Routes/profile')
const app = express();
app.use(express.json());
const mongoose=require('mongoose')
const uri = "mongodb+srv://karthia:anukarthi@cluster0.34hojsh.mongodb.net/?retryWrites=true&w=majority";

async function connect (){
    try{
        mongoose.connect(uri)
        console.log("connected to db")
    }
    catch{
console.error(error )
    }
}

connect()
 
app.use('/profile',profileRouter)
/* app.get("/profile", (req, res) => {
  res.send("Hello World!");
}); */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
