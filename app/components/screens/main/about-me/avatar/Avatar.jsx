import React from 'react'
import styles from './Avatar.module.scss'

const Avatar = ({ about }) => {
	return (
		<div className={styles.image}>
			<img src={about?.avatar} width="500" heigth="500" />
		</div>
	)
}

export default Avatar
