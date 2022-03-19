import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import Layout from "../../components/Layout/Layout"

const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(user, password)

        navigate('/')
    }

    return(
        <Layout>
            <form onSubmit={handleSubmit}>
                <input 
                type="mail" 
                placeholder="Email" 
                onChange={e =>setUser(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="Password" 
                onChange={e =>setPassword(e.target.value)}
                />
                <button>LOGIN</button>
            </form>
        </Layout>
    )
}

export default Login