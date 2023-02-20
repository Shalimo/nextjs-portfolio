// import ReactCertificate from '../../app/assets/img/ReactCertificate.jpg'
// import MvpCertificate from '../../app/assets/img/MvpCertificate.jpg'
import ReactCert2 from '/static/ReactCertificate.jpg'
import MvpCert2 from '/static/MvpCertificate.jpg'

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