import firebase from 'firebase/app'
import 'firebase/auth'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: "admin-template-aib.appspot.com",
        messagingSenderId: "131737806806",
        appId: "1:131737806806:web:9e3717adfb55288e47e677"
    })
}

export default firebase