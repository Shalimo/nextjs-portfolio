const social = [
    {
        id: 1, path: 'https://github.com/Shalimo', title: 'GitHub'
    },
    {
        id: 2, path: 'https://www.linkedin.com/in/nikita-shalimo-640b2b21b/', title: 'LinkedIn'
    }
]

export default function handler(req, res) {
    res.status(200).json(social)
  }