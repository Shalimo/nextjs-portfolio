import { useState, useRef, useEffect } from 'react'
import emailjs from 'emailjs-com'

export const useLike = () => {
	const formRef = useRef()
	const [done, setDone] = useState(false)
	const [like, setLike] = useState(false)
	const [isLiked, setIsLiked] = useState('')
	const [loading, setLoading] = useState(false)

	const sendData = e => {
		e.preventDefault()
		setLoading(true)
		setLike(true)
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
					setLoading(false)
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

	const handleLikeClick = () => {
		setIsLiked('Like')
	}

	return { isLiked, loading, sendData, formRef, handleLikeClick }
}
