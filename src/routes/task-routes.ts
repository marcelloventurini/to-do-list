import express from 'express'
import TaskController from '../controllers/task-controller'

const router = express.Router()

router.get('/tasks', TaskController.getTasks)

export default router
