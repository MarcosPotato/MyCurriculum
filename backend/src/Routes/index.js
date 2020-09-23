const Express = require('express')
const route = Express.Router()

const ProfileRoutes = require('./profile.routes.js')
const CertificatesRoutes = require('./certificates.routes.js')

route.use(Express.json())

route.use('/profile', ProfileRoutes )
route.use('/certificates/', CertificatesRoutes )

module.exports = route