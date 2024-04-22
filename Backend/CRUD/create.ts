import TaskModel from '../Database/schema'
import { Request, Response } from 'express';

export const createTask = async (req: Request, res: Response): Promise<void> => {
    const title: string | null = req.body.title;

    if (!title) {
        res.status(400).json({ error: 'There must be a title for the task ....' });
        return;
    }

    try {
        const newTask = await TaskModel.create({ title });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Error creating task.' });
    }
};

export default createTask