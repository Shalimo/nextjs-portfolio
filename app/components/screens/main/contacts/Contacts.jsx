import styles from './Contacts.module.scss'
import { useEmail } from '../../../../hooks/useEmail'
import Spinner from '../../../ui/spinner/Spinner'
import { useEffect } from 'react'

const Contacts = ({ contacts }) => {
	// console.log(contacts)
	const { done, loading, sendData, formRef, error } = useEmail()
	useEffect(() => {
		console.log(formRef)
	}, [formRef])

	return (
		<div id="Contacts" className={styles.contactsWrapper}>
			<div className={styles.contactsLeft}>
				<div className={styles.contactsTitle}>GET IN TOUCH</div>
				{contacts
					? contacts.map((item, i) => {
							return (
								<div key={item.id} className={styles.content}>
									<img className={styles.img} src={item.path} />
									{item.id === 1 || item.id === 2 ? (
										<p className={styles.title}>{item.title}</p>
									) : (
										<a
											target="_blank"
											className={styles.titleLink}
											href="https://t.me/shponik"
											rel="noreferrer"
										>
											{item.title}
										</a>
									)}
								</div>
							)
					  })
					: null}
			</div>
			<div className={styles.contactsRight}>
				<div className={styles.contactsTitle}>EMAIL ME HERE</div>
				<form ref={formRef} className={styles.form} onSubmit={sendData}>
					<div className="flex flex-col">
						<input
							className={styles.input}
							type="text"
							placeholder="Your name"
							name="user_name"
						/>
						<input
							className={styles.input}
							type="text"
							placeholder="Your email"
							name="user_email"
						/>
						<textarea
							className={styles.textarea}
							rows="5"
							placeholder="Your message"
							name="message"
						></textarea>
					</div>
					<button className={styles.submitButton}>Submit</button>
					{error && (
						<div className={styles.noData}>Please fill in all fields</div>
					)}
					{loading && (
						<div className={styles.spinner}>
							<Spinner />
						</div>
					)}
					{done && (
						<div className={styles.successMessage}>
							Message sent successfully
						</div>
					)}
				</form>
			</div>
		</div>
	)
}

export default Contacts
