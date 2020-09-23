const connect = require('../Database/conection.js')

module.exports = {
    async getAllCertificates (request, response) {
        const { idUser } = request.params

        try{
            const certificates = await connect('certificates')
                .select("*")
                .where('pf_id', '=', idUser)
                .orderBy('cf_name', 'asc')

            return response.status(200).json(certificates)
        } catch(err){
            return response.status(400).json({ 
                error: err, 
                message: 'Failed to search certificates from this user'
            })
        }
    },

    async addCertificate (request, response) {
        const { idUser } = request.params
        const { name, link, desc, img, date, institution } = request.body

        try{
            await connect('certificates').insert({
                pf_id: idUser,
                cf_name: name,
                cf_url: link,
                cf_desc: desc,
                cf_img: img,
                cf_date: date,
                cf_institution: institution
            })

            return response.status(204).json()
        }catch(err){
            console.log(err)
            return response.status(400).json({ 
                error: err, 
                message: 'Failed to insert this certificate from this user'
            })
        }
    }
}