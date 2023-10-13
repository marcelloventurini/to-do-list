import express from 'express'
import TaskController from '../controllers/task-controller'

const router = express.Router()

router.get('/tasks', TaskController.getTasks)
router.post('/tasks', TaskController.createTask)

export default router
