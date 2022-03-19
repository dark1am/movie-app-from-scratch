import styled from 'styled-components'

const CardUnit = styled.div`
    height: 15rem;
    width: 10rem;
    border: 1px solid black;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: var(--primary-color);
`

const CardWrapper = styled.div`
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    border: 1px solid black;
`

export {
    CardUnit,
    CardWrapper
}