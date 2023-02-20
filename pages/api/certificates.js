import ReactCertificate from '../../app/assets/img/ReactCertificate.jpg'
import MvpCertificate from '../../app/assets/img/MvpCertificate.jpg'

const img1 = ReactCertificate.src;
const img2 = MvpCertificate.src;

const certificates = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    }
]

export default function handler(req, res) {
    res.status(200).json(certificates)
  }