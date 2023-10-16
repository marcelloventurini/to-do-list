import { Request, Response } from 'express'
import Task, { ITask } from '../models/task.js'
import mongoose from 'mongoose'

class TaskController {
  static async getTasks(_: Request, res: Response): Promise<void> {
    try {
      const tasks = await Task.find()
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ message: 'Failed to get tasks.' })
    }
  }

  static async getTaskById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Invalid ID format.' })
      }

      const task = await Task.findById(id)

      if (!task) {
        res.status(404).json({ message: 'ID not found.' })
      } else {
        res.status(200).json(task)
      }

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

  static async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const taskDetails: ITask = req.body
      const updatedTask = await Task.findByIdAndUpdate(id, taskDetails)

      res.status(200).json(updatedTask)
    } catch (error) {
      res.status(500).json({ message: 'Failed to update task.' })
    }
  }
}

export default TaskController
