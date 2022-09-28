import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div class={styles.box}>
					<div class={styles.btn}>
						<span>ABOUT</span>
					</div>
				</div>
				<div class={styles.box}>
					<div class={styles.btn}>
						<span>PROJECTS</span>
					</div>
				</div>
				<div class={styles.box}>
					<div class={styles.btn}>
						<span>CONTACTS</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
