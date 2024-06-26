import { Request, Response } from 'express'
import TaskModel from '../Database/schema'

const getTask = async (_: Request, res: Response): Promise<void> => {
    try {
        const AllTask = await TaskModel.find()
        res.json(AllTask)
    } catch (error) {
        res.status(500).json({ error: 'Error In fetching Tasks ....' })
    }
}

export default getTask