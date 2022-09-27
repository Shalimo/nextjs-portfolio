const contacts = [
    {
        id: 1,
        path: '../../public/contacts/phone.png',
        title: '+375 29 626-91-41'
    },
    {
        id: 2,
        path: '../../public/contacts/mail.png',
        title: 'shpoisnik@gmail.com'
    },
    {
        id: 3,
        path: '../../public/contacts/telegram.png',
        title: '@shponik'
    }
]

export default function handler(req, res) {
    res.status(200).json(contacts)
  }