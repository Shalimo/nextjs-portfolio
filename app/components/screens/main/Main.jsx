import MetaTitle from '../../ui/MetaTitle'
import About from './about-me/About'
import Contacts from './contacts/Contacts'
import Projects from './projects/projects'

import styles from './Main.module.scss'

const Main = ({ projects }) => {
	return (
		<section className={styles.section}>
			<MetaTitle title={'Portfolio'} />
			<div className={styles.container}>
				<About />
				<Projects data={projects} />
				<Contacts />
			</div>
		</section>
	)
}

export default Main
