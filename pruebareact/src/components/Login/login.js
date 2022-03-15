import { useEffect, useState } from "react"
import { useLocation } from "wouter"
import useUser from "hooks/useUser"
import './login.css'

export default function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const {login, isLogged} = useUser()

    useEffect(() => {
        if(isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        login({username, password})
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            
            <label> username 
                <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/> 
            </label> 
            <label> password
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label> 
            <button className="btn"> Login </button>
        </form>
    )
}
