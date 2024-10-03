import mongoose from 'mongoose';
import config from './config.js';

const db = config.mongoURI;

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
    
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
