import { Request, Response } from 'express'
import Task from '../models/task.js'

class TaskController {
  static async getTasks(_: Request, res: Response): Promise<void> {
    try {
      const tasks = await Task.find()
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ message: 'Failed to get tasks.' })
    }
  }
}

export default TaskController
