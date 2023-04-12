const about = {
	avatar: 'https://i.ibb.co/ydNqFd3/me.jpg',
	introduction:
		"<p>Hello, i'm</p><p>Nikita Shalimo</p><p>Front-end developer based in Warsaw</p>",
	cv: 'https://drive.google.com/file/d/1Yodyfnihs_DOZAx6FTow_4-jclsuti7q/view?usp=sharing'
}

export default function handler(req, res) {
	res.status(200).json(about)
}
