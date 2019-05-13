const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

// Cria schema do usuário
const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// Criptografa a senha
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  this.password = await bcryptjs.hash(this.password, 8)
})
// Comprar as senhas
UserSchema.methods = {
  hashCompare (password) {
    return bcryptjs.compare(password, this.password)
  }
}

module.exports = mongoose.model('User', UserSchema)
