import mongoose from "mongoose";

const connectDb = handler => async (req, res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req, res);
    }
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log('Connection Sucessful');
        }).catch((err) => console.log('Connection fail'));
    return handler(req, res);

}


// mongoose.connect(process.env.MONGO_URI).then(()=>{
//     console.log('Connection Sucessful');
// }).catch((err) => console.log('Connection fail'));

export default connectDb;