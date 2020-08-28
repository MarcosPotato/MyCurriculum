import Axios from 'axios'

const api = Axios.create({
    baseURL: "http://localhost:9897"
})

export default api