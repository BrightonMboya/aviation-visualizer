import axios from 'axios'
let base = "http://localhost:5000/api"

export default axios.create({
    baseURL: base,
    headers: {
        "Content-Type": "application/json"
    }
})