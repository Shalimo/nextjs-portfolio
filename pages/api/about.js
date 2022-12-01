const about = {
    avatar: 'https://avatars.githubusercontent.com/u/45921781?v=4',
    introduction: 
    "<p>Hello, i'm</p><p>Nikita Shalimo</p><p>Junior front-end developer based in Minsk</p>",
    cv: 'https://drive.google.com/file/d/1Ea6dErTbPit6vEqSpzpD-cDPVbdGl9Gr/view?usp=sharing'
}

export default function handler(req, res) {
    res.status(200).json(about)
  }