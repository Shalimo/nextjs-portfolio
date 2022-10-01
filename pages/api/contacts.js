const contacts = [
    {
        id: 1,
        path: 'https://cdn-icons-png.flaticon.com/512/3059/3059954.png',
        title: '+375 29 626-91-41'
    },
    {
        id: 2,
        path: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
        title: 'shpoisnik@gmail.com'
    },
    {
        id: 3,
        path: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png',
        title: '@shponik'
    }
]

export default function handler(req, res) {
    res.status(200).json(contacts)
  }