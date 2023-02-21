import ReactCertificate from 'public/images/ReactCertificate.jpg';
import MvpCertificate from 'public/images/MvpCertificate.jpg';
import CssCertificate from 'public/images/CssCertificate.jpg';

const certificates = [
    {
        id: 1,
        title: '3-month internship',
        subtitle: 'React, React Native',
        img: MvpCertificate
    },
    {
        id: 2,
        title: 'The Complete ReactJS Course',
        subtitle: 'React',
        img: ReactCertificate
    },
    {
        id: 3,
        title: 'CSS Layout Course',
        subtitle: 'CSS, SASS, BEM, Tailwind, Figma',
        img: CssCertificate
    }
]

export default function handler(req, res) {
    res.status(200).json(certificates)
  }