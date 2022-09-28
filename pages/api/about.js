const about = {
    avatar: '../../public/icons/me.jpg',
    introduction: 
    "<p>Hello, i'm</p><p>Nikita Shalimo</p><p>Junior front-end developer based in Minsk</p>"
}

export default function handler(req, res) {
    res.status(200).json(about)
  }