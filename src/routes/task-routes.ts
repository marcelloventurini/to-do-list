import express from 'express'
import TaskController from '../controllers/task-controller'
import paginate from '../middlewares/paginate'

const router = express.Router()

router.get('/tasks', TaskController.getTasks, paginate)
router.get('/tasks/search', TaskController.search, paginate)
router.get('/tasks/filter', TaskController.filter, paginate)
router.get('/tasks/:id', TaskController.getTaskById)
router.post('/tasks', TaskController.createTask)
router.put('/tasks/:id', TaskController.updateTask)
router.delete('/tasks/:id', TaskController.deleteTask)

export default router
