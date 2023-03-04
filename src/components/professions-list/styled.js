import styled from 'styled-components'

export const AlignLimiter = styled.section`
    display: flex;
    justify-content: center;
`

export const SectionLimiter = styled.div`
    width: 75%;
    padding: 50px 0;
`

export const DivRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const Ul = styled.ul`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    gap: 30px;
`

export const Img = styled.img`
    width: 70px;

    @media(max-width: 1000px){
        width: 50px;
    }

    @media(max-width: 485px){
        width: 40px;
    }
`

export const H2 = styled.h2`
    font-weight: 800;
    font-size: 27px;
    margin-bottom: 60px;
    color: #1c5c7f;
    text-align: center;

    @media(max-width: 1000px){
        font-size: 25px;
    }

    @media(max-width: 485px){
        font-size: 23px;
    }
`

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #656565;
    margin-bottom: 20px;
`