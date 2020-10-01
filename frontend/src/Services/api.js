import Axios from 'axios'

const api = Axios.create({
    baseURL: "http://192.168.1.13:9897"
})

export default api