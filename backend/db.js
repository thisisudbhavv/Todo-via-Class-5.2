const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://pateludbhav2001:7pqH4735LRPxsz3w@cluster0.ohgynyy.mongodb.net/reactApp");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}