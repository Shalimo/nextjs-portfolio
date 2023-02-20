import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Certificates.module.scss'
import { useChangeCertificate } from '../../../../hooks/useChangeCertificate'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import ReactCert from '../../../../../public/ReactCertificate.jpg'

const Certificates = ({ certificates }) => {
	// const { prevImgIndex, nextImgIndex, activeIndex } =
	// 	useChangeCertificate(certificates)

	const [current, setCurrent] = useState(0)
	const length = certificates && certificates.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (
		!Array.isArray(certificates && certificates) ||
		certificates?.length <= 0
	) {
		return null
	}

	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<p>My certificates</p>
			</div>
			<div className="flex flex-row items-center mt-7">
				<FaArrowAltCircleLeft
					className={styles.leftArrow}
					onClick={prevSlide}
					color="white"
				/>
				{certificates &&
					certificates.map((item, i) => (
						<div
							className={i === current ? styles.active : styles.slide}
							key={i}
						>
							{i === current && (
								<Image
									key={item.img}
									src={item?.img?.src}
									alt="not found"
									width={600}
									height={450}
									className={styles.image}
								/>
							)}
							<Image
								key={1}
								src={ReactCert}
								alt="not found"
								width={600}
								height={450}
								className={styles.image}
							/>
						</div>
					))}
				<FaArrowAltCircleRight
					className={styles.rightArrow}
					onClick={nextSlide}
					color="white"
				/>
			</div>
		</div>
	)
}

export default Certificates
