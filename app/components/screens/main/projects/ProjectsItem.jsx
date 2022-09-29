import Image from 'next/image'
import { APP_URL } from '../../../../constants'
import { useShowInfo } from '../../../../hooks/useShowInfo'

import styles from './Projects.module.scss'

const ProjectsItem = ({ item }) => {
	const { onShowInfo, info, showItems, setShotItems, ref } = useShowInfo(false)
	return (
		<div className={styles.projectContainer}>
			<div className={styles.projectContent}>
				<div className={styles.projectInfo}>
					<button
						ref={ref}
						onClick={() => {
							onShowInfo(item), setShotItems(!showItems)
						}}
						className={styles.infoButton}
					>
						about
					</button>
					{showItems && (
						<div className={styles.projectInfoContainer}>
							<p className={styles.info}>{info.title}</p>
						</div>
					)}
					<p className={styles.projectName}>{item.title}</p>
					{item.url ? (
						<a target="_blank" href={item.url ? item.url : '#'}>
							<button className={styles.projectButton}>Code</button>
						</a>
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
