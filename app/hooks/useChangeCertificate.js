import { useState, useEffect } from "react";

export const useChangeCertificate = (certificate) => {
    // Индекс текущего слайда
const [activeIndex, setActiveIndex] = useState(0);
 
// Хук Effect
useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
        // Меняем состояние
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === certificate.length - 1 ? 0 : current + 1
            // Возвращаем индекс
            return res
        })
    }, 3000)
    // Выключаем интервал
    return () => clearInterval()
}, [])
 
// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : certificate.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === certificate.length - 1 ? 0 : activeIndex + 1

return {prevImgIndex, nextImgIndex, activeIndex}
}