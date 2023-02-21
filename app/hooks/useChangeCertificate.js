import { useState, useEffect } from "react";

export const useChangeCertificate = (certificates, styles) => {
    const [current, setCurrent] = useState(0)
	const [visibleSlides] = useState(1)

	const nextSlide = () => {
		const next = current + 1
		if (next >= certificates?.length) {
			setCurrent(0)
		} else {
			setCurrent(next)
		}
	}

	const prevSlide = () => {
		const prev = current - 1
		if (prev < 0) {
			setCurrent(certificates?.length - 1)
		} else {
			setCurrent(prev)
		}
	}

	const handlePaginationClick = index => {
		setCurrent(index)
	}

	const getSlides= () => {
		const start = current
		const end = current + visibleSlides + 1
		return certificates.slice(start, end)
	}

	const getPaginationItems = () => {
		const paginationItems = []
		const totalPages = Math.ceil(certificates?.length / visibleSlides)

		for (let i = 0; i < totalPages; i++) {
			const isActive = i === current
			paginationItems.push(
				<button
					key={i}
					onClick={() => handlePaginationClick(i)}
					className={isActive ? styles.activePage : styles.nonActivePage}
				>
					{i + 1}
				</button>
			)
		}

		return paginationItems
	}

    return {nextSlide, prevSlide, getSlides, getPaginationItems}
}