import { Request, Response } from 'express'
import TaskModel from '../Database/schema'

const updateTask = async (req: Request, res: Response): Promise<void> => {
    const taskId = req.params.id
    const updateData = req.body

    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(taskId, updateData, {
            new: true,
        })

        if (!updatedTask) {
            res.status(404).json({ error: 'Task not found' })
        }
        res.json(updatedTask)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the task' })
    }
}

export default updateTask