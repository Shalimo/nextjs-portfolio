const links = [
  {
    id: 1,
    url: '',
    title: 'Personal CRM',
    description: 'Commercial project from MVP Connect. React. Working with Firebase, GAPI, People API. Authorization via google and facebook. Layout with dynamic using Figma. Implementation of front-end and back-end communication. Used: context, hooks, custom hooks, axios, JS methods.'
  },
  {
    id: 2,
    url: '',
    title: 'Restaurants Terminal',
    description: 'Commercial project from MVP Connect. React native app. Poster analogue. Layout with dynamic of all screens using Figma. Registration, entering a pin code, adding/deleting an order, menu sorting, adding/deleting guests, choosing a payment method, dropdowns, modals, notifications, booking calendar. Used: context, hooks, custom hooks, JS methods.'
  },
  {
    id: 3,
    url: 'https://github.com/Shalimo/nextjs-portfolio',
    title: 'Portfolio',
    description: 'React/NextJS portfolio. Used: nextjs API, RestAPI, hooks, custom hooks, tailwind, Sass Modules, mixins.'
  },
  {
    id: 4,
    url: 'https://github.com/Shalimo/react-redux-typescript-shop',
    title: 'Fakestore',
    description: 'React/Redux-toolkit/TypeScript. Used: RestAPI, hooks, custom hooks, react query, tailwind, Sass Modules, persist reducers, store, types.'
  },
  {
    id: 5,
    url: 'https://github.com/Shalimo/git-mini-paralect',
    title: 'Mini Github',
    description: 'Task project for Paralect. React. Working with GitHub API. Layout, responsive layout. User search. Displaying information about the user and his repositories. Used: hooks, custom hooks, RestAPI, promises, JS methods.'
  },
  {
    id: 6,
    url: 'https://github.com/Shalimo/remix-cryptocurrencies',
    title: 'Coincap API',
    description: 'Remix/React/Typescript. Displaying a list of cryptocurrencies and information about each cryptocurrency.'
  },
  {
    id: 7,
    url: 'https://github.com/Shalimo/mini-twitter',
    title: 'Mini Twitter',
    description: 'React. Twitter analogue. Adding/deleting posts, ability to like and dislike posts.'
  },
  {
    id: 8,
    url: 'https://github.com/Shalimo/restaurant-app-react-redux',
    title: 'Pizza Store',
    description: 'React/Redux. The server is emulated using json database.'
  },
  {
    id: 9,
    url: 'https://github.com/Shalimo/project-food',
    title: 'Food Store',
    description: 'JavaScript. Modules (tabs, modals, timer, calorie calculator, forms, cards), webpack, RestAPI, promises. The server is emulated using json database.'
  },
  {
    id: 10,
    url: 'https://github.com/Shalimo/irvas-service',
    title: 'Hardware store',
    description: 'JavaScript. Modules, RestAPI, promises, gulp. The server is emulated using php.'
  },
  {
    id: 11,
    url: 'https://github.com/Shalimo/got-db',
    title: 'Game of Thrones API',
    description: 'React. The universe of the game of thrones database. Working with Game of Thrones API. Used: hooks, RestAPI, promises, JS methods.'
  },
  {
    id: 12,
    url: 'https://github.com/Shalimo/currency-converter',
    title: 'Currency converter',
    description: 'React. Working with currensy API. Used: RestAPI, promises, hooks.'
  },
  {
    id: 13,
    url: 'https://github.com/Shalimo/booking-calendar',
    title: 'Booking calendar',
    description: 'JavaScript. Booking calendar for hotels. Test task.'
  },
  {
    id: 14,
    url: 'https://github.com/Shalimo/react-redux-counter',
    title: 'Counter',
    description: 'My first project with React/Redux. Just a memory.'
  }
]

export default function handler(req, res) {
  res.status(200).json(links)
}
