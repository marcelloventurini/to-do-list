import { Request, Response } from "express";

async function paginate(req: Request, res: Response) {
  try {
    const { limit = 3, page = 1, sortField = '_id', order = -1 } = req.query
    const result = req.result

    if (Number(limit) > 0 && Number(page) > 0) {
      // cria um obj com uma anotação de tipo;
      // essa anotação indica que o obj terá uma chave (o campo de ordenação),
      // que será do tipo string, e um valor (a ordem de ordenação)
      // que pode ser apenas 'asc' ou 'desc'
      const sortOptions: { [key: string]: 'asc' | 'desc' } = {
        [sortField as string]: order == -1 ? 'desc' : 'asc'
      }

      const tasks = await result.find()
        .sort(sortOptions)
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit))

      if (tasks.length === 0) {
        res.status(404).json({message: 'No task found.'})
        return
      }

      res.status(200).json(tasks)
    } else {
      res.status(400).json({ message: 'Invalid format for page or limit.' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export default paginate
