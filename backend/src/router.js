const Express = require('express')
const route = Express.Router()

const ProfileController = require('./Controllers/ProfileController.js')

route.use(Express.json())

route.get('/profile', ProfileController.getAllProfiles )
route.get('/profile/:id', ProfileController.getProfile )

route.post('/profile', ProfileController.addNewProfile )
route.delete('/profile/:id', ProfileController.deleteProfile )
route.put('/profile/:id', ProfileController.udpdateUser )

module.exports = route