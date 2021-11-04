const {updateUsuarios} = require('../../services/usuarios/updateUsuarios')

async function ctrlUpdateUsuarios(req, res){
  try {
  const {name, lastName} = req.body
  const {email} = req.params
  console.log('Actualización Realizada')
  const usuariosx = await updateUsuarios({name, lastName, email})
  return res.status(200).send(usuariosx)
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
}

}
module.exports = {ctrlUpdateUsuarios}
