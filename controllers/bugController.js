const Bug=require('../models/bugSchema');

const submit=async(req,res)=>{
    try{
        const bug=new Bug(req.body);
        const save=await bug.save();
        res.status(201).json(save);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

const getBug=async(req,res)=>{
    try{
        const bugs=await Bug.find();
        res.status(201).json(bugs);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

module.exports={submit,getBug};