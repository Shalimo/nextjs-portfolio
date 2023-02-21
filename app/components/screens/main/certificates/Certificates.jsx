import React from 'react'
import Image from 'next/image'
import styles from './Certificates.module.scss'
import { ImArrowLeft } from 'react-icons/im'
import { ImArrowRight } from 'react-icons/im'
import { useChangeCertificate } from '../../../../hooks/useChangeCertificate'

const Certificates = ({ certificates }) => {
	const { nextSlide, prevSlide, getSlides, getPaginationItems } =
		useChangeCertificate(certificates && certificates, styles)

	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<p>My certificates</p>
			</div>
			<div className="flex flex-row items-center mt-7 text-center">
				<ImArrowLeft
					className={styles.leftArrow}
					onClick={prevSlide}
					color="white"
					onMouseOver={({ target }) => (target.style.color = '#5D57B1')}
					onMouseOut={({ target }) => (target.style.color = 'white')}
				/>

				{getSlides().map((item, i) => (
					<div className={i === 0 ? styles.active : styles.slide} key={item.id}>
						{i === 0 && (
							<div className={styles.certificatesContainer}>
								<Image
									src={`${item?.img?.src}?v=${new Date().getTime()}`}
									alt="not found"
									width={600}
									height={450}
									className={styles.image}
								/>
								<div className={styles.title}>{item.title}</div>
								<div className={styles.subtitle}>{item.subtitle}</div>
							</div>
						)}
					</div>
				))}
				<ImArrowRight
					className={styles.rightArrow}
					onClick={nextSlide}
					color="white"
					onMouseOver={({ target }) => (target.style.color = '#5D57B1')}
					onMouseOut={({ target }) => (target.style.color = 'white')}
				/>
			</div>
			<div className={styles.pagination}>{getPaginationItems()}</div>
		</div>
	)
}

export default Certificates
