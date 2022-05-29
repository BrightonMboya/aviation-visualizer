const mongoose = require('mongoose')

const sensorSchema = mongoose.Schema({
    lat:{
        type:Number,
        required:true
    },

    lon: {
        type:Number,
        required:true
    },

    radius: {
        type:Number,
        required:true
    }
})


Sensor = mongoose.model('sensor', sensorSchema)

module.exports =  Sensor