require('dotenv').config()
const db = require('./src/lib/db.js')
const server = require('./src/server.js')

db
  .then(() => {
    console.log('Estamos conectados')
    console.log('Aqui levanto el servicio')
    server.listen(8080, () => {
      console.log('Sever running')
    })
  })
  .catch(error => {
    console.error('Algo salio mal', error)
  })
