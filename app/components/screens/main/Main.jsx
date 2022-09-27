import MetaTitle from '../../ui/MetaTitle'
import Header from './header/Header'
import About from './about-me/About'
import Projects from './projects/Projects'
import Contacts from './contacts/Contacts'

import styles from './Main.module.scss'

const Main = ({ projects, skills, about, contacts }) => {
	return (
		<section className={styles.section}>
			<MetaTitle title={'Portfolio'} />
			<div className={styles.container}>
				<Header />
				<About skills={skills} about={about} />
				<div className={styles.borderContainer}>
					<div className={styles.border}></div>
				</div>
				<Projects projects={projects} />
				<div className={styles.borderContainer}>
					<div className={styles.border}></div>
				</div>
				<Contacts contacts={contacts} />
			</div>
		</section>
	)
}

export default Main
