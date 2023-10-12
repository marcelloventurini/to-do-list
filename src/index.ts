import express from 'express'

const app = express()
const port = 3000

app.get('/', (_, res) => {
  res.send('hi mom')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
