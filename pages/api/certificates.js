const certificates = [
	{
		id: 1,
		title: '3-month internship',
		subtitle: '2 commercial projects, React, React Native ',
		img: 'https://i.ibb.co/3k0FBt2/Mvp-Certificate.jpg'
	},
	{
		id: 2,
		title: 'The Complete TypeScript Course',
		subtitle: 'TypeScript',
		img: 'https://i.ibb.co/T0FpqBt/TSCert.jpg'
	},
	{
		id: 3,
		title: 'The Complete ReactJS Course',
		subtitle: 'React',
		img: 'https://i.ibb.co/4mS624D/React-Certificate.jpg'
	},
	{
		id: 4,
		title: 'CSS Layout Course',
		subtitle: 'CSS, SASS, BEM, Tailwind, Figma',
		img: 'https://i.ibb.co/PgrrLTV/Css-Certificate.jpg'
	}
]

export default function handler(req, res) {
	res.status(200).json(certificates)
}
