import { Request, Response } from 'express'
import Task, { ITask } from '../models/task.js'

class TaskController {
  static async getTasks(_: Request, res: Response): Promise<void> {
    try {
      const tasks = await Task.find()
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ message: 'Failed to get tasks.' })
    }
  }

  static async createTask(req: Request, res: Response): Promise<void> {
    try {
      const taskDetails: ITask = req.body
      const newTask = await Task.create(taskDetails)

      res.status(200).json(newTask)
    } catch (error) {
      res.status(500).json({ message: 'Failed to create new task.' })
    }
  }
}

export default TaskController
