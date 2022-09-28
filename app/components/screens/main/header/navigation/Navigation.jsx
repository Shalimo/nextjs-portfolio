import { Link } from 'react-scroll'
import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<>
			<Link
				activeClass={styles.active}
				to="About"
				spy={true}
				smooth={true}
				offset={-130}
				duration={500}
			>
				<div class={styles.box}>
					<div class={styles.btn}>
						<span>ABOUT</span>
					</div>
				</div>
			</Link>
			<Link
				activeClass={styles.active}
				to="Projects"
				spy={true}
				smooth={true}
				offset={-130}
				duration={500}
			>
				<div class={styles.box}>
					<div class={styles.btn}>
						<span>PROJECTS</span>
					</div>
				</div>
			</Link>
			<Link
				activeClass={styles.active}
				to="Contacts"
				spy={true}
				smooth={true}
				offset={-130}
				duration={500}
			>
				<div class={styles.box}>
					<div class={styles.btn}>
						<span>CONTACTS</span>
					</div>
				</div>
			</Link>
		</>
	)
}

export default Navigation
