import parse from 'html-react-parser'
import { useShowSkills } from '../../../../../hooks/useShowSkills'
import Image from 'next/image'
import { APP_URL } from '../../../../../constants'
import { APP_CV } from '../../../../../constants'

import styles from './Introduction.module.scss'

const Introduction = ({ about, skills }) => {
	const { showSkills, setShowSkills, ref } = useShowSkills(false)

	return (
		<div className={styles.intro}>
			{about.introduction ? parse(about.introduction) : null}
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
						{skills
							? skills.map((item, i) => {
									return (
										<div className={styles.skill}>
											<Image
												key={item.id ? item.id : null}
												src={`/${APP_URL}/${item.path ? item.path : null}`}
												width={80}
												height={80}
												quality={100}
											/>
											<p className={styles.skillTitle}>{item.title}</p>
										</div>
									)
							  })
							: null}
					</div>
				)}
				<a target="_blank" href={about.cv}>
					<button className={styles.btn}>Download CV</button>
				</a>
			</div>
		</div>
	)
}

export default Introduction
