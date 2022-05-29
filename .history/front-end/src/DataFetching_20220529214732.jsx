import React, {useState, useEffect} from 'react'
import axios from 'axios'

const base = "console.log(e)
res.status(500).json({
  success:false,
  error:e.message
})"

function DataFetching() {
    const [sensors, setSensors] = useState([])

    useEffect(() => {
        axios.get()
    })
}