const Express = require('express')

const CertificatesRoutes = Express.Router()

const CertificatesController = require('../Controllers/CertificatesController.js')

CertificatesRoutes.get('/:idUser', CertificatesController.getAllCertificates )
CertificatesRoutes.post('/:idUser/add-new', CertificatesController.addCertificate )

module.exports = CertificatesRoutes