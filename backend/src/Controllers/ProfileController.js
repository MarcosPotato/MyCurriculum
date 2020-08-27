const connect = require("../Database/conection.js")
const {v4: uuid } = require("uuid")

module.exports = {
    async getAllProfiles (request, response){
        try{
            const profile = await connect('profiles').select('*').orderBy('pf_id')
            
            return response.status(200).json(profile)
        } catch(err){
            return response.status(404).json({ error: `User not found: ${err}`})
        }
    },
    async getProfile (request, response){
        const { id } = request.params

        try{
            const profile = await connect('profiles')
                .select('*')
                .where("pf_id", "=", id)
            
            return response.status(200).json(profile)
        } catch(err){
            return response.status(404).json({ error: `User not found: ${err}`})
        }
    },
    async addNewProfile (request, response){
        const { name, age, address, jobRole, desc } = request.body

        try{
            await connect('profiles')
                .insert({
                    pf_id: uuid(),
                    pf_name: name,
                    pf_age: age,
                    pf_address: address,
                    pf_desc: desc,
                    pf_jobRole: jobRole
                })
            
            return response.status(204).json({})
        } catch(err){
            return response.status(400).json({ error: `Can't add a new profile: ${err}` })
        }
    },
    async deleteProfile (request, response){
        const { id } = request.params

        try{
            await connect('profile')
                .where('pf_id', "=", id)
                .del()
            
            return response.status(200).json({ message: "Delete user has a success" })
        } catch(err){
            return response.status(400).json({ error: `You can't delete this user: ${err}`})
        }
    },
    async udpdateUser (request, response){
        const { id } = request.params
        const { name, age, address, desc } = request.body 

        try{
            await connect('profiles')
                .update({
                    pf_name: name,
                    pf_age: age,
                    pf_address: address,
                    pf_desc: desc
                })
                .where('pf_id', '=', id)
            
            return response.status(204).json({ message: "User has been updated" })
        } catch(err){
            return response.status(400).json({ error: `you can't updtade this profile` })
        }
    }
}