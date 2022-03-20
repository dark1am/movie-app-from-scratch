import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import firebaseApp from "../../firebase/credentials"

export const login = async (email, password) =>{
    const auth = getAuth(firebaseApp)
    await signInWithEmailAndPassword(auth, email, password)
}

