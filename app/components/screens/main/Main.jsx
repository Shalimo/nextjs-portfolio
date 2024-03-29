import MetaTitle from '../../ui/MetaTitle'
import Header from './header/Header'
import About from './about-me/About'
import Projects from './projects/Projects'
import Contacts from './contacts/Contacts'
import Footer from './footer/Footer'

import styles from './Main.module.scss'
import Certificates from './certificates/Certificates'

const Main = ({ projects, skills, about, contacts, social, certificates }) => {
	const border = (
		<div className={styles.borderContainer}>
			<div className={styles.border}></div>
		</div>
	)

	return (
		<section className={styles.section}>
			<MetaTitle title={'Portfolio'} />
			<div className={styles.container}>
				<Header />
				<About skills={skills} about={about} />
				{border}
				<Projects projects={projects} />
				{border}
				<Certificates certificates={certificates} />
				{border}
				<Contacts contacts={contacts} />
				<Footer social={social} />
			</div>
		</section>
	)
}

export default Main
