import mongoose, { Schema, Document } from "mongoose"

export interface ITask extends Document {
  title: string
  description?: string
  dueDate?: Date
  priority?: string
  status: string
}

const taskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  dueDate: {
    type: Date,
    get: (date: Date) => date.toISOString().split('T')[0]
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  status: {
    type: String,
    required: true,
    enum: ['todo', 'inProgress', 'completed'],
    default: 'todo'
  }
})

export default mongoose.model<ITask>('Task', taskSchema)
