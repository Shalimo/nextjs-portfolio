import styles from './Header.module.scss'
import Navigation from './navigation/Navigation'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Navigation />
			</div>
		</header>
	)
}

export default Header
