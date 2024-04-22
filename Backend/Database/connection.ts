import mongoose from "mongoose"

const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://mittalashu2204:d5Xw6RuYPPSAb8Qg@to1.tawcutl.mongodb.net/")
        console.log("Database is connected ....")
    } catch (error) {
        console.log("Error in connecting DataBase ....")
    }
}

export default connectDB 