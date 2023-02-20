import ReactCert2 from '/public/ReactCertificate.jpg'
import MvpCert2 from '/public/MvpCertificate.jpg'

const img1 = ReactCert2.src;
const img2 = MvpCert2.src;

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