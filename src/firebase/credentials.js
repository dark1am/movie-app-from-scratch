import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAscrmdnwpqu7JIokND0ax_U0_EK_CMhKw",
    authDomain: "movie-app-from-scratch.firebaseapp.com",
    projectId: "movie-app-from-scratch",
    storageBucket: "movie-app-from-scratch.appspot.com",
    messagingSenderId: "33284865155",
    appId: "1:33284865155:web:e9d3a6f1f435d9105eafb6"
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp