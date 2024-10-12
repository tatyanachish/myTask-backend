const { Router } = require('express');
const { getTask, saveTasks, deleteTask,editTask } = require('./TaskController');
const router = Router();

router.get('/',getTask);
router.post('/saveTasks',saveTasks);
router.delete('/deleteTask',deleteTask);
router.put('/editTask',editTask)


module.exports = router;