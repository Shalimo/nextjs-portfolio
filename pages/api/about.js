const about = {
    avatar: 'https://i.ibb.co/ydNqFd3/me.jpg',
    introduction: 
    "<p>Hello, i'm</p><p>Nikita Shalimo</p><p>Junior front-end developer based in Minsk</p>",
    cv: 'https://drive.google.com/file/d/1Ea6dErTbPit6vEqSpzpD-cDPVbdGl9Gr/view?usp=sharing'
}

export default function handler(req, res) {
    res.status(200).json(about)
  }