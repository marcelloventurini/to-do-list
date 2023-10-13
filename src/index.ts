import express from 'express'
import dbConnect from './config/db-connection'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3000

const MONGO_URI: string = process.env.MONGO_URI as string
dbConnect(MONGO_URI)

if (!MONGO_URI) {
  throw new Error('The MONGO_URI environment variable is not defined.')
}

app.get('/', (_, res) => {
  res.status(200).send('Home')
})

app.use(express.json())

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
