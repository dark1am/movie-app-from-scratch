import { NavbarButtons, NavbarContainer, NavbarWrapper } from "./Navbar.elements"

function Navbar() {
  return (
      <NavbarContainer>
          <NavbarWrapper>
              <h1>LOGO</h1>
              <NavbarButtons>
                    <li>HOME</li>
                    <li>ACTIVITY</li>
                    <li>FILMS</li>
                    <li>LOGIN</li>
              </NavbarButtons>
          </NavbarWrapper>
      </NavbarContainer>
  )
}

export default Navbar