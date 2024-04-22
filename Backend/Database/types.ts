import mongoose from "mongoose";

interface Task extends mongoose.Document {
    title: string,
    completed: boolean
}

export default Task