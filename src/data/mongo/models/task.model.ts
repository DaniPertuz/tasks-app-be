import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title:  { type: String, required: true },
  body:   { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' }
});

export const TaskModel = mongoose.model('Task', taskSchema);
