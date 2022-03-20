import { getFirestore, doc, setDoc } from 'firebase/firestore'
import firebaseApp from "../../firebase/credentials"
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

export const register = async (userName, email, password) => {

    const auth = getAuth(firebaseApp)
    const firestore = getFirestore(firebaseApp)

    const userInfo = await createUserWithEmailAndPassword(auth, email, password)
    .then(info => {
        return info
    })

    const docRef = await doc(firestore, `users/${userInfo.user.uid}`)
    setDoc(docRef, {accountName: userName})
 }