const express = require('express')
const app = express()
const port = 9000
const TodoModel=require("./models/todo")
require("./db")

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})