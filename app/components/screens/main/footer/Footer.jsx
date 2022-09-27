import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<header className={styles.footer}>
			<div className={styles.container}>
				<p className={styles.text}>© 2022. All rights reserved</p>
			</div>
		</header>
	)
}

export default Footer
