const express = require('express')

const routes = express.Router()
const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')

// Rotas CRUD Usuário
routes.get('/users', UserController.list)
routes.post('/user', UserController.store)
routes.delete('/user/:id', UserController.delete)
routes.put('/user/:id', UserController.update)
// Rota Sessão
routes.post('/sessions', SessionController.store)

module.exports = routes
