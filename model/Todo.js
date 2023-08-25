// this is to validate the data coming from the user

import mongoose from "mongoose";

// this will define the how the data will be defined
// schema to use to define pre-structure and format to follow to use data 
const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const todo = mongoose.model('todo', TodoSchema);

export default todo;