import styles from './Projects.module.scss'
import ProjectsItem from './ProjectsItem'

const Projects = ({ projects }) => {
	return (
		<div id="Projects" className={styles.container}>
			<div className={styles.titles}>
				<p className={styles.title}>Portfolio</p>
				<p className={styles.subtitle}>Creative Works</p>
			</div>
			<div className={styles.portfolioContainer}>
				<div className={styles.projectsContainer}>
					{projects.map((item, i) => {
						return <ProjectsItem key={item.id} item={item} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Projects
