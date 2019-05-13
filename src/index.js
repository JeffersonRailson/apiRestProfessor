const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json()) // Para Salvar

// importando o BD
mongoose.connect('mongodb://localhost:27017/ifma', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})

require('./models/User')
app.use(require('./routes'))

app.listen(3000)
