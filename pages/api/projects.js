const links = [
  {
    id: 1,
    icon: {
      path: '../../public/icons/CRM.png'
    },
    url: '',
    title: 'Personal CRM',
    description: 'Commercial project from MVP Connect. JavaScript, React. Working with Firebase, GAPI, People API. Authorization via google and facebook. Displaying dynamic information on the screen. Layout using Figma. Implementation of front-end and back-end communication.'
  },
  {
    id: 2,
    icon: {
      path: '../../public/icons/terminal.png'
    },
    url: '',
    title: 'Restaurants Terminal',
    description: 'Commercial project from MVP Connect. React native app. Poster analogue. Layout of all screens using Figma. Adding dynamics.'
  },
  {
    id: 3,
    icon: {
      path: '../../public/icons/github.jpg'
    },
    url: 'https://github.com/Shalimo/git-mini-paralect',
    title: 'Mini Github',
    description: 'Task project for Paralect.'
  },
  {
    id: 4,
    icon: {
      path: '../../public/icons/twitter.jpg'
    },
    url: 'https://github.com/Shalimo/mini-twitter',
    title: 'Mini Twitter',
    description: 'React app. Twitter analogue.'
  },
  {
    id: 5,
    icon: {
      path: '../../public/icons/pizza.jpg'
    },
    url: 'https://github.com/Shalimo/restaurant-app-react-redux',
    title: 'Pizza Store',
    description: 'React/Redux app. The server is emulated using json database.'
  },
  {
    id: 6,
    icon: {
      path: '../../public/icons/food.jpg'
    },
    url: 'https://github.com/Shalimo/project-food',
    title: 'Food Store',
    description: 'JavaScript app. Modules (tabs, modals, timer, calorie calculator, forms, cards), webpack, fetch API. The server is emulated using json database.'
  },
  {
    id: 7,
    icon: {
      path: '../../public/icons/hardware.jpg'
    },
    url: 'https://github.com/Shalimo/irvas-service',
    title: 'Hardware store',
    description: 'JavaScript app. Modules, fetch API, gulp. The server is emulated using echo php.'
  },
  {
    id: 8,
    icon: {
      path: '../../public/icons/got.jpg'
    },
    url: 'https://github.com/Shalimo/got-db',
    title: 'Game of Thrones API',
    description: 'React app. The universe of the game of thrones - database using Game of Thrones API.'
  },
  {
    id: 9,
    icon: {
      path: '../../public/icons/converter.jpg'
    },
    url: 'https://github.com/Shalimo/currency-converter',
    title: 'Currency converter',
    description: 'React app. Currensy API, fetch API, function components, hooks.'
  },
  {
    id: 10,
    icon: {
      path: '../../public/icons/calendar.jpg'
    },
    url: 'https://github.com/Shalimo/booking-calendar',
    title: 'Booking calendar',
    description: 'Test task (JavaScript app).'
  },
  {
    id: 11,
    icon: {
      path: '../../public/icons/counter.jpg'
    },
    url: 'https://github.com/Shalimo/react-redux-counter',
    title: 'Counter',
    description: 'My first project with React/Redux. Just a memory.'
  }
]

export default function handler(req, res) {
  res.status(200).json(links)
}
