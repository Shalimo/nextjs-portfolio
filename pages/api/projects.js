const links = [
	{
		id: 1,
		url: '',
		title: 'Shipping App & Site',
		description:
			'<p>A service for working with various food organizations that needed product transportation.</p><br><ul><li>- Layout of full service (with adaptive design)</li><li>- Registration/authorization</li><li>- Implementation of front-end and back-end communication</li><li>- Working with databases</li><li>- Working with various APIs</li><li>- Performance optimization</li><li>- Working with REST API to receive and send data to the server<li></ul>',
		languages: 'JavaScript, React, React Native, Redux, TypeScript'
	},
	{
		id: 2,
		url: '',
		title: 'Personal CRM',
		description:
			'<p>Commercial project from MVP Connect.</p><br>Software that helps companies manage customer relationships.<br><ul><li>- Working with Firebase</li><li>- Working with GAPI</li><li>- Working with People API</li><li>- Authorization via google and facebook</li><li>- Layout with dynamic using Figma</li><li>- Implementation of front-end and back-end communication</li></ul><br>Used: context, hooks, custom hooks, axios, JS methods.',
		languages: 'JavaScript, React'
	},
	{
		id: 3,
		url: '',
		title: 'Restaurants Terminal',
		description:
			'<p>Commercial project from MVP Connect. Poster analogue.</p><br>A client application used to manage orders and payments in restaurants.<ul><li>- Layout with dynamic of all screens using Figma</li><li>- Registration</li><li>- Entering a pin code</li><li>- Adding/deleting an order</li><li>- Menu sorting</li><li>- Adding/deleting guests</li><li>- Choosing a payment method</li><li>- Dropdowns, modals, notifications</li><li>- Booking calendar</li></ul><br>Used: context, hooks, custom hooks, JS methods.',
		languages: 'React Native'
	},
	{
		id: 4,
		url: 'https://github.com/Shalimo/nextjs-typescript-taxi-app',
		title: 'Taxi App',
		description:
			'<p>The analogue of a taxi ordering application.</p><br><p>Used: Google Maps Api, hooks, custom hooks, tailwind, sass modules, mixins, store, types.</p>',
		deploy: 'https://nextjs-typescript-taxi-app.vercel.app',
		languages: 'React, NextJS, TypeScript, Redux-toolkit'
	},
	{
		id: 5,
		url: 'https://github.com/Shalimo/git-mini-paralect',
		title: 'Mini Github',
		description:
			'<p>Task project for Paralect.</p><p>A service for finding github users and their repositories.</p><br><ul><li>- Working with GitHub API</li><li>- Layout, responsive layout</li><li>- User search</li><li>- Displaying information about the user and his repositories</li></ul><br><p>Used: hooks, custom hooks, RestAPI, promises, JS methods.</p>',
		deploy: 'https://git-mini-paralect.vercel.app',
		languages: 'React'
	},
	{
		id: 6,
		url: 'https://github.com/Shalimo/nextjs-portfolio',
		title: 'Portfolio',
		description:
			'<p>My portfolio.</p><br><p>Used: nextjs API, RestAPI, hooks, custom hooks, localstorage, tailwind, sass modules, mixins.</p>',
		deploy: 'https://nextjs-portfolio-lovat-five.vercel.app',
		languages: 'React, NextJS, Firebase'
	},
	{
		id: 7,
		url: 'https://github.com/Shalimo/react-redux-typescript-shop',
		title: 'Fakestore',
		description:
			'Used:<p>Analogue of the online store.</p><br><ul><li>- RestAPI</li><li>- Hooks</li><li>- Custom hooks</li><li>- React query</li><li>- Tailwind</li><li>- Sass modules</li><li>- Persist reducers</li><li>- Store</li><li>- Types</ul>',
		deploy: 'https://react-redux-typescript-shop.vercel.app',
		languages: 'React, Redux-toolkit, TypeScript'
	},
	{
		id: 8,
		url: 'https://github.com/Shalimo/image-gallery',
		title: 'Image Gallery',
		description:
			'<p>Stock images gallery.</p><br>Used: RestAPI, hooks, custom hooks, tailwind, sass modules.',
		deploy: 'https://image-gallery-shalimo.vercel.app',
		languages: 'React'
	},
	{
		id: 9,
		url: 'https://github.com/Shalimo/trello-clone.git',
		title: 'Trello Clone',
		description:
			'<p>A copy of the trello app.</p><br><p>Used: hooks, custom hooks, tailwind, sass modules.</p>',
		deploy: 'https://trello-clone-shalimo.vercel.app',
		languages: 'React, Redux-toolkit'
	},
	{
		id: 10,
		url: 'https://github.com/Shalimo/remix-cryptocurrencies',
		title: 'Coincap API',
		description:
			'Displaying a list of cryptocurrencies and information about each cryptocurrency.',
		deploy: 'https://remix-cryptocurrencies.vercel.app',
		languages: 'Remix, React, TypeScript'
	},
	{
		id: 11,
		url: 'https://github.com/Shalimo/mini-twitter',
		title: 'Mini Twitter',
		description:
			'<p>Twitter analogue.</p><br><ul><li>- Adding/deleting posts</li><li>- Ability to like and dislike posts.</li></ul>',
		languages: 'React'
	},
	{
		id: 12,
		url: 'https://github.com/Shalimo/restaurant-app-react-redux',
		title: 'Pizza Store',
		description:
			'<p>Pizza ordering website.</p><br><p>The server is emulated using json database.</p>',
		languages: 'React, Redux'
	},
	{
		id: 13,
		url: 'https://github.com/Shalimo/project-food',
		title: 'Food Store',
		description:
			'<p>Food ordering website.</p><br><ul><li>- Modules (tabs, modals, timer, calorie calculator, forms, cards)</li><li>- Webpack</li><li>- RestAPI</li><li>- Promises</li></ul><br><p>The server is emulated using json database.</p>',
		languages: 'JavaScript'
	},
	{
		id: 14,
		url: 'https://github.com/Shalimo/irvas-service',
		title: 'Hardware store',
		description:
			'<p>Store of building materials.</p><br><ul><li>- Modules</li><li>- RestAPI</li><li>- Promises</li><li>- Gulp</li></ul><br><p>The server is emulated using php.</p>',
		languages: 'JavaScript'
	},
	{
		id: 15,
		url: 'https://github.com/Shalimo/got-db',
		title: 'Game of Thrones API',
		description:
			'<p>The universe of the game of thrones database.</p><br><p>Working with Game of Thrones API.</p><br><p>Used: hooks, RestAPI, promises, JS methods.</p>',
		languages: 'React'
	},
	{
		id: 16,
		url: 'https://github.com/Shalimo/currency-converter',
		title: 'Currency converter',
		description:
			'<p>Currency conversion service.</p><br><p>Working with currensy API.</p><br><p>Used: RestAPI, Promises, Hooks.</p>',
		languages: 'React'
	},
	{
		id: 17,
		url: 'https://github.com/Shalimo/booking-calendar',
		title: 'Booking calendar',
		description: 'Booking calendar for hotels. Test task.',
		languages: 'JavaScript'
	},
	{
		id: 18,
		url: 'https://github.com/Shalimo/react-redux-counter',
		title: 'Counter',
		description: 'My first project with React/Redux. Just a memory.',
		languages: 'React, Redux'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
