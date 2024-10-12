
const taskModel = require('./TaskModel');

module.exports.getTask = async(req,res) => {
    const myTask =await taskModel.find();
    res.send(myTask)
}

module.exports.saveTasks = async(req,res) => {
    const {title,description,date} = req.body;
    taskModel.create({title,description,date})
    .then((data) => {console.log('Task Added')
        res.send(data)
    })    
}

module.exports.deleteTask = async(req,res) => {
    const {_id} = req.body;
    taskModel.findByIdAndDelete(_id)
    .then(() => res.send("Task was deleted"))
}

module.exports.editTask = async(req,res) => {
    const {_id,title} = req.body;
    taskModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send("Task was edited"))
}