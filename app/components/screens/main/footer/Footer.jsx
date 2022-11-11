import styles from './Footer.module.scss'

const Footer = ({ social }) => {
	return (
		<header className={styles.footer}>
			<div className={styles.container}>
				<p className={styles.text}>© 2022. All rights reserved</p>
			</div>
			<div className={styles.social}>
				{social
					? social.map(item => {
							return (
								<div key={item.id} className={styles.box}>
									<a
										rel="noreferrer"
										href={item.path}
										target="_blank"
										className={styles.btn}
									>
										<span>{item.title}</span>
									</a>
								</div>
							)
					  })
					: null}
			</div>
		</header>
	)
}

export default Footer


