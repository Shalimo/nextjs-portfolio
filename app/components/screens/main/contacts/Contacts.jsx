import styles from './Contacts.module.scss'
import { useEmail } from '../../../../hooks/useEmail'
import Spinner from '../../../ui/spinner/Spinner'
import { useEffect } from 'react'

const Contacts = ({ contacts }) => {
	const { done, loading, sendData, formRef, error } = useEmail()
	useEffect(() => {
		console.log(formRef)
	}, [formRef])

	return (
		<div id="Contacts" className={styles.container}>
			<p className={styles.mainTitle}>GET IN TOUCH</p>
			<div className={styles.contactsContainer}>
				{contacts
					? contacts.map((item, i) => {
							return (
								<div key={item.id} className={styles.content}>
									<img className={styles.img} src={item.path} />
									<p className={styles.title}>{item.title}</p>
								</div>
							)
					  })
					: null}
			</div>
			<form ref={formRef} className={styles.form} onSubmit={sendData}>
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
				<button className={styles.submitButton}>Submit</button>
			</form>
			{error && <div className={styles.noData}>Not all data entered</div>}
			{loading && (
				<div className={styles.spinner}>
					<Spinner />
				</div>
			)}
			{done && (
				<div className={styles.successMessage}>Message sent successfully</div>
			)}
		</div>
	)
}

export default Contacts
