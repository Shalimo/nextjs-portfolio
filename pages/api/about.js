const about = {
    avatar: 'https://i.ibb.co/ydNqFd3/me.jpg',
    introduction: 
        "<p>Hello, i'm</p><p>Nikita Shalimo</p><p>Junior front-end developer based in Warsaw</p>",
    cv: 'https://drive.google.com/file/d/1xJRip-bwPkDOv2zPC3Hq8HZNAjWkECr4/view?usp=sharing'
}

export default function handler(req, res) {
    res.status(200).json(about)
  }