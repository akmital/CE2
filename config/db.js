const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connected");
    }catch(err){
        console.log("MongoDb connection failed:", err.message);
    }
}
module.exports=dbConnect;
