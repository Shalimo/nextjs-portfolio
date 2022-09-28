import styles from './Contacts.module.scss'
import Image from 'next/image'
import { APP_URL } from '../../../../constants'
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
