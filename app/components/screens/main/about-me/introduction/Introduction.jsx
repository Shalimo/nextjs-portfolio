import parse from 'html-react-parser'
import { useShowSkills } from '../../../../../hooks/useShowSkills'
import Image from 'next/image'
import { APP_URL } from '../../../../../constants'
import { APP_CV } from '../../../../../constants'

import styles from './Introduction.module.scss'

const Introduction = ({ introduction, skills }) => {
	const { showSkills, setShowSkills, ref } = useShowSkills(false)

	return (
		<div className={styles.intro}>
			{parse(introduction)}
			<div className={styles.buttons}>
				<button
					ref={ref}
					onClick={() => {
						setShowSkills(!showSkills)
					}}
					className={styles.btn}
				>
					My skills
				</button>
				{showSkills && (
					<div className={styles.skillsContainer}>
						{skills.map((item, i) => {
							return (
								<div className={styles.skill}>
									<Image
										key={item.id}
										src={`/${APP_URL}/${item.path}`}
										width={80}
										height={80}
										quality={100}
									/>
									<p className={styles.skillTitle}>{item.title}</p>
								</div>
							)
						})}
					</div>
				)}
				<button className={styles.btn}>
					<a target="_blank" href={APP_CV}>
						Download CV
					</a>
				</button>
			</div>
		</div>
	)
}

export default Introduction
