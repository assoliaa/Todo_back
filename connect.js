const mongoose =require('mongoose')


const connect =(url)=>{
    return mongoose.connect(url)
}

//mongoose.connect(connection).then(()=>console.log("connected"))
module.exports =connect;