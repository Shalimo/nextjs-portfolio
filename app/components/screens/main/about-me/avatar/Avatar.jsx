import React from 'react'
import Image from 'next/image'
import { APP_URL } from '../../../../../constants'
import styles from './Avatar.module.scss'

const Avatar = ({ avatar }) => {
	return (
		<div className={styles.image}>
			<Image
				src={`/${APP_URL}/${avatar}`}
				width={500}
				height={500}
				quality={100}
			/>
		</div>
	)
}

export default Avatar
