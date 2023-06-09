import mongoose from "mongoose";

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`MongoDB connected at ${conn.connection.host}`.cyan.underline);
  } catch(error) {
    console.error(`ERROR: ${error.message}.red.underline.bold`)
    process.exit(1)
  }
}

export default connectDB;