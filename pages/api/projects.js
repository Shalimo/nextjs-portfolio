const links = [
  {
    id: 1,
    icon: {
      path: '../../public/icons/CRM.png'
    },
    url: ''
  },
  {
    id: 2,
    icon: {
      path: '../../public/icons/terminal.png'
    },
    url: ''
  },
  {
    id: 3,
    icon: {
      path: '../../public/icons/github.jpg'
    },
    url: 'https://github.com/Shalimo/git-mini-paralect'
  },
  {
    id: 4,
    icon: {
      path: '../../public/icons/twitter.jpg'
    },
    url: 'https://github.com/Shalimo/mini-twitter'
  },
  {
    id: 5,
    icon: {
      path: '../../public/icons/pizza.jpg'
    },
    url: 'https://github.com/Shalimo/restaurant-app-react-redux'
  },
  {
    id: 6,
    icon: {
      path: '../../public/icons/food.jpg'
    },
    url: 'https://github.com/Shalimo/project-food'
  },
  {
    id: 7,
    icon: {
      path: '../../public/icons/hardware.jpg'
    },
    url: 'https://github.com/Shalimo/irvas-service'
  },
  {
    id: 8,
    icon: {
      path: '../../public/icons/got.jpg'
    },
    url: 'https://github.com/Shalimo/got-db'
  },
  {
    id: 9,
    icon: {
      path: '../../public/icons/converter.jpg'
    },
    url: 'https://github.com/Shalimo/currency-converter'
  },
  {
    id: 10,
    icon: {
      path: '../../public/icons/calendar.jpg'
    },
    url: 'https://github.com/Shalimo/booking-calendar'
  },
  {
    id: 11,
    icon: {
      path: '../../public/icons/counter.jpg'
    },
    url: 'https://github.com/Shalimo/react-redux-counter'
  }
]

export default function handler(req, res) {
  res.status(200).json(links)
}
