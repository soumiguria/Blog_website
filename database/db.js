import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {
        const connectionInstance = await mongoose.connect(
          `${process.env.MONGODB_URI}`
        );
        console.log(
          `\n MongoDB Connected: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;