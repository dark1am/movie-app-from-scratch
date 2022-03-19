import { useState } from "react"
import Layout from "../../components/Layout/Layout"
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import firebaseApp from "../../firebase/credentials"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()
    const auth = getAuth(firebaseApp)

    const [userName, setUserName]=useState(null)
    const [email, setEmail]=useState(null)
    const [password, setPassword]=useState(null)

    const register = async (email, password) => {
       await createUserWithEmailAndPassword(auth, email, password)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userName,email,password)
        register(email,password)
        .then(res => navigate('/'))
        /* navigate('/') */
    }

    return(
        <Layout>
            <form onSubmit={handleSubmit}>
                <label>Nombre de usuario</label>
                <input type="text" onChange={e => setUserName(e.target.value)} />
                <label>Email</label>
                <input type="email" onChange={e => setEmail(e.target.value)}  />
                <label>Contraseña</label>
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <button>REGISTER</button>
            </form>
        </Layout>
    )
}

export default Register