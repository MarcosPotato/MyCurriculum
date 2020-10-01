const Express = require('express')

const ProfileRoutes = Express.Router()

const ProfileController = require('../Controllers/ProfileController.js')

ProfileRoutes.get('/', ProfileController.getAllProfiles )
ProfileRoutes.get('/:id', ProfileController.getProfile )
//ProfileRoutes.get('/contacts/:idUser', ProfileController.getProfileContacts )

ProfileRoutes.post('/', ProfileController.addNewProfile )

ProfileRoutes.delete('/:id', ProfileController.deleteProfile )

ProfileRoutes.put('/:id', ProfileController.udpdateUser )

module.exports = ProfileRoutes