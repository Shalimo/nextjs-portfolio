const about = {
	avatar: 'https://i.ibb.co/ydNqFd3/me.jpg',
	introduction:
		"<p>Hello, i'm</p><p>Nikita Shalimo</p><p>Front-end developer based in Warsaw</p>",
	cv: 'https://drive.google.com/file/d/17z5JTTFjwWOhBOWDPUMqGUU3rd6Qf33P/view?usp=sharing'
}

export default function handler(req, res) {
	res.status(200).json(about)
}
