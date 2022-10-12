const skills = [
    {
        id: 1, path: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png', title: "HTML5"
    },
    {
        id: 2, path: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', title: "CSS3"
    },
    {
        id: 3, path: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', title: "JS"
    },
    {
        id: 4, path: 'https://cdn-icons-png.flaticon.com/512/969/969958.png', title: "React"
    },
    {
        id: 5, path: 'https://cdn-icons-png.flaticon.com/512/520/520890.png', title: "React Native"
    },
    {
        id: 6, path: 'https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png', title: "NextJS"
    },
    {
        id: 7, path: 'https://img.icons8.com/color/344/redux.png', title: "Redux"
    },
]

export default function handler(req, res) {
    res.status(200).json(skills)
  }