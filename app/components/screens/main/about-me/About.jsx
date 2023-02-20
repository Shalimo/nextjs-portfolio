import styles from './About.module.scss'
import Introduction from './introduction/Introduction'
import Avatar from './avatar/Avatar'

const About = ({ skills, about }) => {
	return (
		<about id="About" className={styles.about}>
			<div className={styles.left}>
				<Introduction
					about={about ? about : null}
					skills={skills ? skills : null}
				/>
			</div>
			<div className={styles.right}>
				<Avatar about={about} />
			</div>
		</about>
	)
}

export default About
