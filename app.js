import express from "express";
import axios from 'axios'

const app = express()

app.get('/', (req,res) => {
    return res.sendFile('index.html', { root: '.' });
})

app.get('/script.js', (req,res) => {
    return res.sendFile('script.js', { root: '.' });
})

app.get('/style.css', (req,res) => {
    return res.sendFile('style.css', { root: '.' });
})

app.get('/api', async (req,res) => {
    const {date, lat, lng} = req.query
    const {data} = await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`)
    return res.send(data)
})

app.listen(8080, ()=> {
    console.log("listening on 8080")
})