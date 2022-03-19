import styled from 'styled-components'

const CardUnit = styled.div`
    height: 15rem;
    width: 10rem;
    border: 1px solid black;
    overflow: hidden;
`

const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
`

export {
    CardUnit,
    CardWrapper
}