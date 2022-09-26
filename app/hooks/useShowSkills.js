import { useState, useRef, useEffect } from "react"

export const useShowSkills = (state) => {
    const [showSkills, setShowSkills] = useState(false)
    const ref = useRef(null)

    const onClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setShowSkills(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClickOutside, true)
        return () => {
            document.addEventListener('click', onClickOutside, true)
        }
    })

    return {showSkills, setShowSkills, ref}

}