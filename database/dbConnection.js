import mongoose from "mongoose";
const dbConnectin = () =>{
    mongoose.connect(process.env.MONGO_URI ,{
        dbName:"PORTFOLIO",

    }).then(()=>{
         console.log("connected to database")
    }).catch((error)=>{
        console.log(`some error occured when connecting to database: ${error}`)
    })
}

export default dbConnectin;