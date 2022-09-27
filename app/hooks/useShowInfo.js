import { useState, useRef, useEffect } from "react"

export const useShowInfo = (state) => {
    const [showItems, setShotItems] = useState(state)
    const [info, setInfo] = useState({})
    const ref = useRef(null)
    
    const onShowInfo = (item) => {
        setInfo({title: item.description})
    }

    const onClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setShotItems(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClickOutside, true)
        return () => {
            document.addEventListener('click', onClickOutside, true)
        }
    })
    
    return {onShowInfo, info, showItems, setShotItems, ref}
}
