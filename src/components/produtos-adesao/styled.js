import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    padding: 80px 90px;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    margin-bottom: 10px;
`

export const HeadingTwo = styled.h2`
    font-weight: 800;
    font-size: 25px;
    margin-bottom: 60px;
    color: #37a0cd;

    @media(max-width: 1000px){
        font-size: 23px;
    }

    @media(max-width: 485px){
        font-size: 20px;
    }
`

export const ProductsList = styled.ul`
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media(max-width: 1200px){
        gap: 20px;
    }

    @media(max-width: 700px){
        gap: 40px;
    }
`

export const Li = styled.li`
    width: 100px;

    @media(max-width: 1200px){
        width: 80px;
    }

    @media(max-width: 1100px){
        width: 70px;
    }
`

export const Img = styled.img`
    width: 100%;
`