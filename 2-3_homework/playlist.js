const playlist = [
  {
    songId: '1',
    songName: 'Heathens',
    artist: 'Twenty One Pilots',
    songUrl: 'https://www.youtube.com/watch?v=1',
    songDuration: '3:00',
    views: 12,
  },
  {
    songId: '2',
    songName: 'Bad Guy',
    artist: 'Billie Eilish',
    songUrl: 'https://www.youtube.com/watch?v=YfC8q6g4E78',
    songDuration: '3:13',
    views: 10,
  },
  {
    songId: '3',
    songName: 'Old Town Road',
    artist: 'Lil Nas X',
    songUrl: 'https://www.youtube.com/watch?v=mHdvD4x46cE',
    songDuration: '2:49',
    views: 15,
  },
  {
    songId: '4',
    songName: '7 Rings',
    artist: 'Ariana Grande',
    songUrl: 'https://www.youtube.com/watch?v=8aFk14y8_s0',
    songDuration: '2:59',
    views: 20,
  },
]

const getAllSong = (req, res) => {
  // query parameter
  const { sort, name } = req.query
  let sortedSong = [...playlist]
  if (sort) {
    sortedSong.sort((a, b) => {
      if (sort === 'asc') {
        return a.views - b.views
      } else if (sort === 'desc') {
        return b.views - a.views
      } else {
        return
      }
    })
  }
  if (name) {
    sortedSong = sortedSong.filter((song) => song.songName === name)
  }
  return res.json({
    message: 'Successfully retrieved all songs',
    data: sortedSong,
  })
}

const getSong = (req, res) => {
  const songId = req.params.songId
  try {
    const song = playlist.find((song) => song.songId == songId)
    if (!song) {
      throw new Error()
    }
    return res.json({
      message: 'Successfully retrieved a song',
      data: song,
    })
  } catch (err) {
    return res.status(404).json({
      message: 'Song not found',
    })
  }
}

const playSong = (req, res) => {
  const songId = req.params.songId

  try {
    const song = playlist.find((song) => song.songId == songId)
    if (!song) {
      throw new Error()
    }
    song.views += 1
    return res.json({
      message: 'Successfully played the song',
      data: song,
    })
  } catch (err) {
    return res.status(404).json({
      message: 'Song not found',
    })
  }
}

const generateSongId = () => {
  return Math.random().toString(10).substr(2, 6)
}

const createSong = (req, res) => {
  const { songName, artist, songUrl, songDuration } = req.body
  const song = {
    songId: generateSongId(),
    songName,
    artist,
    songUrl,
    songDuration,
    views: 0,
  }
  playlist.push(song)
  return res.json({
    message: 'Successfully created a new song',
    data: song,
  })
}

module.exports = {
  getAllSong,
  getSong,
  createSong,
  playSong,
}
