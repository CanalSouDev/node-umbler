const express = require('express')

const app  = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World na Umbler!')
})

app.listen(port, function () {
  console.log(`App listening on port ${port}`)
})
