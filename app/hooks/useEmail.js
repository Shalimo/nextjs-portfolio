import { useState, useRef } from "react";
import emailjs from 'emailjs-com'

export const useEmail = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const sendData = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2aipf7v', 'template_abezvej', formRef.current, 'I-sVFmjXGCpl4NZAv')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        }).finally (() => {
            formRef.current.reset(); 
        })
    }
    return {done, sendData, formRef}
}