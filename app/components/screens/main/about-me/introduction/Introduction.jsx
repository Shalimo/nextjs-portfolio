import parse from 'html-react-parser'
import { useShowSkills } from '../../../../../hooks/useShowSkills'
import styles from './Introduction.module.scss'

const Introduction = ({ about, skills }) => {
	const { showSkills, setShowSkills, ref } = useShowSkills(false)

	return (
		<div className={styles.intro}>
			{about.introduction && parse(about.introduction)}
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

				<a target="_blank" href={about.cv}>
					<button className={styles.btn}>Download CV</button>
				</a>
			</div>
			{showSkills && (
				<div className={styles.skillsContainer}>
					{skills
						? skills.map((item, i) => {
								return (
									<div key={item.id} className={styles.skill}>
										<img
											key={item.id}
											src={item.path}
											className={styles.skillIcon}
										/>
										<p className={styles.skillTitle}>{item.title}</p>
									</div>
								)
						  })
						: null}
				</div>
			)}
		</div>
	)
}

export default Introduction
