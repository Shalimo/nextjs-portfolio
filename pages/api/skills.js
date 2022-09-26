const skills = [
    {
        id: 1, path: '../../public/skills/HTML.png', title: "HTML5"
    },
    {
        id: 2, path: '../../public/skills/CSS.png', title: "CSS3"
    },
    {
        id: 3, path: '../../public/skills/JS.png', title: "JS"
    },
    {
        id: 4, path: '../../public/skills/React.png', title: "React"
    },
    {
        id: 5, path: '../../public/skills/ReactNative.png', title: "React Native"
    },
    {
        id: 6, path: '../../public/skills/NextJS.png', title: "NextJS"
    },
    {
        id: 7, path: '../../public/skills/Redux.png', title: "Redux"
    },
]

export default function handler(req, res) {
    res.status(200).json(skills)
  }