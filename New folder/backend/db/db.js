import mongoose from "mongoose";

const Connection = async () => {
    const uri = 'mongodb+srv://lokendra:lokendragupta@cluster0.ja4pfzb.mongodb.net/?retryWrites=true&w=majority'
    try {
        await mongoose.connect(uri, { useUnifiedTopology: true })
        console.log('db connected');
    } catch (error) {
        console.log(error);
    }
}

export default Connection