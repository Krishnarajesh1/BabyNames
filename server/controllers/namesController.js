const {User} = require("../models/userSchema");

const getAllNames = async (req,res)=>{
  try
  {
    const users = await User.find({})
    res.status(200).json(users)
  }catch(error){
    res.send("something went wrong", error)
  }
};

const getNumorologyDetails = async (req,res)=>{
  try
  {
    const users = await User.find({})
    res.status(200).json(users)
  }catch(error){
    res.send("something went wrong", error)
  }
};

const getNumorologyDetailsbyId = async (req,res)=>{
  try
  {
    const users = await User.find({})
    res.status(200).json(users)
  }catch(error){
    res.send("something went wrong", error)
  }
};

const getHouseNames = async (req,res)=>{
  try
  {
    const users = await User.find({})
    res.status(200).json(users)
  }catch(error){
    res.send("something went wrong", error)
  }
};

const getBoyNames = async (req,res)=>{
  try
  {
    const users = await User.find({})
    res.status(200).json(users)
  }catch(error){
    res.send("something went wrong", error)
  }
};

const getGirlNames = async (req,res)=>{
  try
  {
    const users = await User.find({})
    res.status(200).json(users)
  }catch(error){
    res.send("something went wrong", error)
  }
};

const getGodNames = async (req,res)=>{
  try
  {
    const users = await User.find({})
    res.status(200).json(users)
  }catch(error){
    res.send("something went wrong", error)
  }
};

const getGodNamesbyId = async (req,res)=>{
  try
  {
    const users = await User.find({})
    res.status(200).json(users)
  }catch(error){
    res.send("something went wrong", error)
  }
};



module.exports =  {
                    getAllNames,
                    getNumorologyDetails,
                    getNumorologyDetailsbyId,
                    getHouseNames,
                    getBoyNames,
                    getGirlNames,
                    getGodNames,
                    getGodNamesbyId
                  };





                  
