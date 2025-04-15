const express=require("express");
const dbConnect=require("./config/db");
const bugRoutes=require("./routes/bugRoutes");

const app=express();
app.use(express.json());
dbConnect();

app.use('/api',bugRoutes);

const port=5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
