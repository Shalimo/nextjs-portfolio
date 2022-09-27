import Image from 'next/image'
import { APP_URL } from '../../../../constants'

import styles from './Projects.module.scss'

const ProjectsItem = ({ item }) => {
	return (
		<div className={styles.projectContainer}>
			<div className={styles.projectContent}>
				<div className={styles.projectInfo}>
					<p className={styles.projectName}>{item.title}</p>
					{item.url ? (
						<button className={styles.projectButton}>
							<a href={item.url ? item.url : '#'}>Code</a>
						</button>
					) : (
						<p className={styles.privateProject}>Private</p>
					)}
				</div>
				<Image
					key={item.id}
					src={`/${APP_URL}/${item.icon.path}`}
					width={1000}
					height={1405}
					objectFit="cover"
					className={styles.image}
					quality={100}
				/>
			</div>
		</div>
	)
}

export default ProjectsItem
