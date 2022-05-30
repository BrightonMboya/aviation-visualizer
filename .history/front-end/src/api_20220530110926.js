import axios from 'axios'
let base = "https://aviation-sensors.herokuapp.com/api"

export default axios.create({
    baseURL: base,
    headers: {
        "Content-Type": "application/json"
    }
})