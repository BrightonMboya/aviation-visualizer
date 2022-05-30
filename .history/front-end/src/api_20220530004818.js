import axios from 'axios'
let base = "/api"

export default axios.create({
    baseURL: base,
    headers: {
        "Content-Type": "application/json"
    }
})