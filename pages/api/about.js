const about = {
    avatar: '../../public/icons/me.jpg',
    introduction: 
    "Hello, i'm Nikita Shalimo Junior front-end developer based in Minsk Skills:"
}

export default function handler(req, res) {
    res.status(200).json(about)
  }