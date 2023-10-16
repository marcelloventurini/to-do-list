import express from 'express'
import TaskController from '../controllers/task-controller'

const router = express.Router()

router.get('/tasks', TaskController.getTasks)
router.get('/tasks/:id', TaskController.getTaskById)
router.post('/tasks', TaskController.createTask)
router.put('/tasks/:id', TaskController.updateTask)

export default router
