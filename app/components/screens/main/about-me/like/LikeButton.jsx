import React from 'react'
import { useLike } from '../../../../../hooks/useLike'
import styles from './LikeButton.module.scss'
import { BsFillHeartFill } from 'react-icons/bs'

const LikeButton = () => {
	const {
		isLiked,
		like,
		loading,
		sendData,
		formRef,
		handleLikeClick,
		counter
	} = useLike()
	return (
		<div>
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
				<button
					onClick={handleLikeClick}
					className={!like ? styles.submitButton : styles.disabledButton}
					disabled={isLiked !== 'Like' ? false : true}
				>
					<BsFillHeartFill
						className={styles.heart}
						color={isLiked ? 'red' : 'grey'}
					/>
					<div className="mr-1">{!like ? 'like' : 'liked'}</div>
					<div className="text-xs">{`(${counter})`}</div>
				</button>
			</form>
			<div className={styles.liked}>
				{loading && 'Thank you, I will get a notification of your likes'}
			</div>
		</div>
	)
}

export default LikeButton
