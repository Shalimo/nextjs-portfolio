import Image from 'next/image'
import { APP_URL } from '../../../../constants'
import { useShowInfo } from '../../../../hooks/useShowInfo'

import styles from './Projects.module.scss'

const ProjectsItem = ({ item }) => {
	const { onShowInfo, info, showItems, setShotItems, ref } = useShowInfo(false)
	return (
		<div className={styles.projectContainer}>
			<div className={styles.projectInfo}>
				{item.deploy ? (
					<a
						target="_blank"
						href={item.deploy ? item.deploy : '#'}
						rel="noreferrer"
					>
						<button className={styles.deployButton}>deploy</button>
					</a>
				) : null}
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
					<a target="_blank" href={item.url ? item.url : '#'} rel="noreferrer">
						<button className={styles.projectButton}>Code</button>
					</a>
				) : (
					<p className={styles.privateProject}>Private</p>
				)}
			</div>
		</div>
	)
}

export default ProjectsItem
