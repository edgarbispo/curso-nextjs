import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9URj2IZVlwD-S1-v_BGMxH16Yc1T-Pbc",
    authDomain: "boardapp-36a04.firebaseapp.com",
    projectId: "boardapp-36a04",
    storageBucket: "boardapp-36a04.appspot.com",
    messagingSenderId: "384694613061",
    appId: "1:384694613061:web:64085925e0b59e0e191f2c"
};

// Se nao tiver uma coneçao aberta
if (!firebase.apps.length){
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
}

export default firebase;