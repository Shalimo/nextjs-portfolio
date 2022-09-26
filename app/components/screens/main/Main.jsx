import MetaTitle from '../../ui/MetaTitle'
import Header from './header/Header'
import About from './about-me/About'
import Projects from './projects/projects'
import Contacts from './contacts/Contacts'

import styles from './Main.module.scss'

const Main = ({ projects, skills, about }) => {
	return (
		<section className={styles.section}>
			<MetaTitle title={'Portfolio'} />
			<div className={styles.container}>
				<Header />
				<About skills={skills} about={about} />
				<Projects projects={projects} />
				<Contacts />
			</div>
		</section>
	)
}

export default Main
