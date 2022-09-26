import MetaTitle from '../../ui/MetaTitle'
import About from './about-me/About'
import Contacts from './contacts/Contacts'
import Projects from './projects/projects'

import styles from './Main.module.scss'

const Main = ({ projects, skills, about }) => {
	return (
		<section className={styles.section}>
			<MetaTitle title={'Portfolio'} />
			<div className={styles.container}>
				<About skills={skills} about={about} />
				<Projects projects={projects} />
				<Contacts />
			</div>
		</section>
	)
}

export default Main
