import { useState } from "react"

export const useShowInfo = (state) => {
    const [showItems, setShotItems] = useState(state)
    const [info, setInfo] = useState({})
    
    const onShowInfo = (item) => {
        setInfo({title: item.description})
    }
    
    return {onShowInfo, info, showItems, setShotItems}
}
