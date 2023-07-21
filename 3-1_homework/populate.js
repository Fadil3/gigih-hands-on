db.Songs.insertMany([
  {
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
  },
  {
    title: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
  },
  {
    title: 'Hallelujah',
    artist: 'Leonard Cohen',
    album: 'Various Positions',
  },
  {
    title: "Free Fallin'",
    artist: 'Tom Petty',
    album: 'Full Moon Fever',
  },
  {
    title: 'Sweet Caroline',
    artist: 'Neil Diamond',
    album: 'Tapestry',
  },
  {
    title: 'Dancing Queen',
    artist: 'ABBA',
    album: 'Arrival',
  },
  {
    title: 'Yesterday',
    artist: 'The Beatles',
    album: 'Help!',
  },
  {
    title: 'Imagine Dragons - Radioactive',
    artist: 'Imagine Dragons',
    album: 'Night Visions',
  },
  {
    title: 'Adele - Hello',
    artist: 'Adele',
    album: '21',
  },
])

db.Artist.insertMany([
  {
    name: 'Freddie Mercury',
    date_of_birth: '1946-09-05',
    genres: ['Rock', 'Pop'],
  },
  {
    name: 'John Lennon',
    date_of_birth: '1940-10-09',
    genres: ['Rock', 'Pop'],
  },
  {
    name: 'Leonard Cohen',
    date_of_birth: '1934-09-21',
    genres: ['Folk', 'Rock'],
  },
  {
    name: 'Bob Dylan',
    date_of_birth: '1941-05-24',
    genres: ['Folk', 'Rock'],
  },
  {
    name: 'The Beatles',
    date_of_birth: '1960-08-01',
    genres: ['Rock', 'Pop'],
  },
  {
    name: 'The Rolling Stones',
    date_of_birth: '1962-07-01',
    genres: ['Rock', 'Blues'],
  },
  {
    name: 'Michael Jackson',
    date_of_birth: '1958-08-29',
    genres: ['Pop', 'R&B'],
  },
  {
    name: 'Whitney Houston',
    date_of_birth: '1963-08-09',
    genres: ['Pop', 'R&B'],
  },
  {
    name: 'Beyoncé',
    date_of_birth: '1981-09-04',
    genres: ['Pop', 'R&B'],
  },
  {
    name: 'Taylor Swift',
    date_of_birth: '1989-12-13',
    genres: ['Pop', 'Country'],
  },
])

db.PopularSongs.insertMany([
  {
    title: 'Bohemian Rhapsody',
    plays: 1000000,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Imagine',
    plays: 750000,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Hallelujah',
    plays: 500000,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: "Free Fallin'",
    plays: 400000,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Sweet Caroline',
    plays: 350000,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Dancing Queen',
    plays: 300000,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Yesterday',
    plays: 250000,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Imagine Dragons - Radioactive',
    plays: 200000,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Adele - Hello',
    plays: 150000,
    period: '2023-01-01 - 2023-06-30',
  },
])
