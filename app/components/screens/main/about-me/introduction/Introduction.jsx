import parse from 'html-react-parser'

import styles from './Introduction.module.scss'

const Introduction = ({ introduction }) => {
	return (
		<div className={styles.intro}>
			{parse(introduction)}
			<button className={styles.btn}>My skills</button>
		</div>
	)
}

export default Introduction
