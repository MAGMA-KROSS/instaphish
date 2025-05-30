import mongoose from "mongoose"

const mongodb = async() => {
    if (mongoose.connections[0].readyState) return;

  try{
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  }
  catch(err){
    console.log("MongoDB connection error:", err);
  }
}

export default mongodb;