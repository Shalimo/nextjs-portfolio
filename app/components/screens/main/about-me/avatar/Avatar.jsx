import React from 'react'
import styles from './Avatar.module.scss'

const Avatar = ({ avatar }) => {
	return (
		<div className={styles.image}>
			<img src="./me.jpg" width="500" heigth="500" />
		</div>
	)
}

export default Avatar
