import { useState } from "react"
import { Link } from "react-router-dom"
import { NavbarButtons, NavbarContainer, NavbarWrapper } from "./Navbar.elements"

import firebaseApp from '../../firebase/credentials'
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth'


function Navbar() {
    
    const auth = getAuth(firebaseApp)
    const [user,setUser] = useState(null)

    onAuthStateChanged(auth, (firebaseUser) => {
        firebaseUser ? setUser(firebaseUser) : setUser(null)
    })

  return (
      <NavbarContainer>
          <NavbarWrapper>
              <h1>letterboxd</h1>
              <NavbarButtons>
                    <li> <input type="text" /> </li>
                    <li> <Link to="/">Home</Link> </li>
                    <li>ACTIVITY</li>
                    <li>FILMS</li>

                    {
                    user ? 
                    <li> <Link to="/">
                        <button onClick={()=> signOut(auth)}>Sign Out</button>
                        </Link> 
                    </li> :
                    <li> <Link to="/login">Login</Link> </li>
                    }

              </NavbarButtons>
          </NavbarWrapper>
      </NavbarContainer>
  )
}

export default Navbar