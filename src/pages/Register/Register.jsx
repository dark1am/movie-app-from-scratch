import { useState } from "react"
import Layout from "../../components/Layout/Layout"
import { useNavigate } from "react-router-dom"
import { register } from "../../firebase/utils/register"

const Register = () => {

    const navigate = useNavigate()
    const [userName, setUserName]=useState(null)
    const [email, setEmail]=useState(null)
    const [password, setPassword]=useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userName,email,password)
        register(userName,email,password)
        .then(()=>{
            setUserName(null)
            setEmail(null)
            setPassword(null)
        })
        .then(() => navigate('/'))
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