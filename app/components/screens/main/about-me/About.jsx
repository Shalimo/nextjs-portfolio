import styles from './About.module.scss'
import Introduction from './introduction/Introduction'
import Avatar from './avatar/Avatar'

const About = ({ skills, about }) => {
	return (
		<about className={styles.about}>
			<div className={styles.left}>
				<Introduction introduction={about.introduction} skills={skills} />
			</div>
			<div className={styles.right}>
				<Avatar avatar={about.avatar} />
			</div>
		</about>
	)
}

export default About
