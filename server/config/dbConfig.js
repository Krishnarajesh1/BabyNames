const mongoose = require('mongoose');

const dbconnect = async()=>{
  try
  {
    const db = await mongoose.connect(process.env.DB_CONNECTION)
    console.log("DB Connected to ",db.connection.host,db.connection.name)
  } catch(error){
    console.log("DB Connection fail", error)
    process.exit(1)
  }
}


module.exports = {dbconnect};