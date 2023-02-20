import ReactCertificate from '../../public/ReactCertificate.jpg'
import MvpCertificate from '../../public/MvpCertificate.jpg'

// const img1 = ReactCertificate.src;
// const img2 = MvpCertificate.src;

const certificates = [
    {
        id: 1,
        img: ReactCertificate
    },
    {
        id: 2,
        img: MvpCertificate
    },
]

export default function handler(req, res) {
    res.status(200).json(certificates)
  }