import Navbar from "../Navbar/Navbar/"
import { Body, BodyWrapper } from './Layout.elements'

function Layout({children}) {
  return (
    <>
        <Navbar />
        <Body>
          <BodyWrapper>
            {children}
          </BodyWrapper>
        </Body>
    </>
  )
}

export default Layout