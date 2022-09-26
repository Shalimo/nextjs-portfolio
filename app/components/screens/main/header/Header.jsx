import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<p className={styles.text}>
					<a className={styles.link} href="#">
						About
					</a>
				</p>
				<p className={styles.text}>
					<a className={styles.link} href="#">
						Projects
					</a>
				</p>
				<p className={styles.text}>
					<a className={styles.link} href="#">
						Contacts
					</a>
				</p>
			</div>
		</header>
	)
}

export default Header
