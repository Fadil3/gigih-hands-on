const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { getAllSong, getSong, createSong, playSong } = require('./playlist.js')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/playlist', getAllSong)
app.get('/playlist/:songId', getSong)
app.get('/playlist/:songId/play', playSong)
app.post('/playlist', createSong)
