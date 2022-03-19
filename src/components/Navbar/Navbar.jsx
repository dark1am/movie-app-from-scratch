import { Link } from "react-router-dom"
import { NavbarButtons, NavbarContainer, NavbarWrapper } from "./Navbar.elements"

function Navbar() {
  return (
      <NavbarContainer>
          <NavbarWrapper>
              <h1>LOGO</h1>
              <NavbarButtons>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>ACTIVITY</li>
                    <li>FILMS</li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <input type="text" />
                    </li>
              </NavbarButtons>
          </NavbarWrapper>
      </NavbarContainer>
  )
}

export default Navbar