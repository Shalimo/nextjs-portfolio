import { useState, useRef, useEffect } from "react";
import emailjs from 'emailjs-com'

export const useEmail = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [loading, setLodaing] = useState(false)

    const sendData = (e) => {
        e.preventDefault();
        setLodaing(true)
        emailjs.sendForm('service_2aipf7v', 'template_abezvej', formRef.current, 'I-sVFmjXGCpl4NZAv')
        .then((result) => {
            console.log(result.text);
            setLodaing(false)
            setDone(true);
        }, (error) => {
            console.log(error.text);
        }).finally (() => {
            formRef.current.reset(); 
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setDone(false)
        }, 2000)
    }, [done])

    return {done, loading, sendData, formRef}
}