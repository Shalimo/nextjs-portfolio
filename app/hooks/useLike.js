import { useState, useRef, useEffect } from 'react'
import emailjs from 'emailjs-com'

export const useLike = () => {
	const formRef = useRef()
	const [done, setDone] = useState(false)
	const [like, setLike] = useState('')
	const [isLiked, setIsLiked] = useState('')
	const [loading, setLoading] = useState(false)

	const sendData = e => {
		e.preventDefault()
		setLoading(true)
		emailjs
			.sendForm(
				'service_e09q48u',
				'template_t36o2uc',
				formRef.current,
				'I-sVFmjXGCpl4NZAv'
			)
			.then(
				result => {
					console.log(result.text)
					setTimeout(() => {
						setLoading(false)
					}, 3500)
					setDone(true)
				},
				error => {
					console.log(error.text)
				}
			)
			.finally(() => {
				formRef.current.reset()
			})
	}

	useEffect(() => {
		const savedLike = localStorage.getItem('like')
		if (savedLike) {
			setIsLiked(savedLike)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('like', isLiked)
	}, [isLiked])

	useEffect(() => {
		const like = localStorage.getItem('isLike')
		if (like) {
			setLike(like)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('isLike', like)
	}, [like])

	const handleLikeClick = () => {
		setTimeout(() => {
			setIsLiked('Like')
			setLike(true)
		}, 100)
		localStorage.setItem('isLike', 'true')
	}

	return { isLiked, like, loading, sendData, formRef, handleLikeClick }
}
