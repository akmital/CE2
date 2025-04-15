const mongoose=require('mongoose');

const dbConnect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://akshimital549:akshi1234@cluster0.pwgqnav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;");
        console.log("MongoDb connected");
    }catch(err){
        console.log("MongoDb connection failed");
    }
}
module.exports=dbConnect;