const User = require('../models/User')

class SessionController {
  async store (req, res) {
    // Recupera e-mail e senha do req.body
    const { email, password } = req.body
    // Procura um usuário que possua o e-mail passado
    const user = await User.findOne({ email })
    // Se não encontrar o e-mail, vai retornar um erro
    if (!user) {
      return res.status(400).json({ erro: 'Usuário Não existe' })
    }
    // Se as senhas não baterem, vai retornar um erro
    if (!(await user.hashCompare(password))) {
      return res.status(400).json({ erro: 'Senha não confere' })
    }
    // Caso e-mail exista e senha conferir vai retornar o usuário
    return res.json(user)
  }
}

module.exports = new SessionController()
