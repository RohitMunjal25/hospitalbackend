import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("DEBUG_MONGO_URL =", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Mongo failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;
