import React from 'react'
import styles from './ColorGuide.module.scss'

export const ColorGuide = () => {
	return (
		<div className="flex flex-row justify-between mt-5">
			<div className="flex flex-row items-center mr-6">
				<div className={styles.commercialTag}></div>
				<div className="text-white ml-2 font-semibold">Commercial Project</div>
			</div>
			<div className="flex flex-row items-center">
				<div className={styles.petTag}></div>
				<div className="text-white ml-2 font-semibold">Pet Project</div>
			</div>
		</div>
	)
}
