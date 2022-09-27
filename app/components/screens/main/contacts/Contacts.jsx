import styles from './Contacts.module.scss'
import Image from 'next/image'
import { APP_URL } from '../../../../constants'

const Contacts = ({ contacts }) => {
	return (
		<div className={styles.container}>
			<p className={styles.mainTitle}>GET IN TOUCH</p>
			<div className={styles.contactsContainer}>
				{contacts.map((item, i) => {
					return (
						<div className={styles.content}>
							<Image
								key={item.id}
								src={`/${APP_URL}/${item.path}`}
								width={100}
								height={100}
								quality={100}
							/>
							<p className={styles.title}>{item.title}</p>
						</div>
					)
				})}
			</div>
			<form className={styles.form}>
				<input
					className={styles.input}
					type="text"
					placeholder="Name"
					name="user_name"
				/>
				<input
					className={styles.input}
					type="text"
					placeholder="Subject"
					name="subject"
				/>
				<input
					className={styles.input}
					type="text"
					placeholder="Email"
					name="user_email"
				/>
				<textarea
					className={styles.textarea}
					rows="5"
					placeholder="Message"
					name="message"
				></textarea>
				<button className={styles.submitButton}>Submit</button>
			</form>
		</div>
	)
}

export default Contacts
