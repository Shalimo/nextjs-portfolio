import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API,
    authDomain: process.env.REACT_APP_AUTH,
    databaseURL: process.env.REACT_APP_DATABASE,
    projectId: 'nextjs-portfolio-8b4f1',
    storageBucket: 'nextjs-portfolio-8b4f1.appspot.com',
    messagingSenderId: '916876990693',
    appId: '1:916876990693:web:a35d909b388180491cdc0c',
    measurementId: 'G-8W4JEZHJNS'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase()
export const reference = ref(db, 'counter')
