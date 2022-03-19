import { NavbarContainer, NavbarWrapper } from "./Navbar.elements"

function Navbar() {
  return (
      <NavbarContainer>
          <NavbarWrapper>
              <h1>LOGO</h1>
              <ul>
                  <li>HOME</li>
                  <li>ACTIVITY</li>
                  <li>FILMS</li>
                  <li>LOGIN</li>
              </ul>
          </NavbarWrapper>
      </NavbarContainer>
  )
}

export default Navbar