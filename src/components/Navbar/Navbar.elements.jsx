import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    width:100%;
    height: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
    padding: 10px 0 10px 0;
`

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    background-color: var(--primary-color);
    border-radius: 0.5rem;
    padding: 0 5rem 0 5rem;
`

export const NavbarButtons = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`