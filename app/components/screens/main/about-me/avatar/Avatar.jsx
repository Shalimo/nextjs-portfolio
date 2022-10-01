import React from 'react'
import styles from './Avatar.module.scss'

const Avatar = ({ avatar }) => {
	return (
		<div className={styles.image}>
			<img
				src="https://avatars.githubusercontent.com/u/45921781?v=4"
				width="500"
				heigth="500"
			/>
		</div>
	)
}

export default Avatar
