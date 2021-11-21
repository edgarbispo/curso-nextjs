import firebase from 'firebase';
import 'firebase/firestore'

//Se for maior que zero, foi inicializado
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.EXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase