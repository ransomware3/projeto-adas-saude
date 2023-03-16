import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    padding: 50px 90px 80px;
    display: flex;
    align-items: center;
    flex-flow: column wrap;

    @media(max-width: 385px){
        display: none;
    }
`

export const HeadingTwo = styled.h2`
    font-weight: 800;
    font-size: 25px;
    margin-bottom: 60px;
    color: #37a0cd;
    text-align: center;

    @media(max-width: 1170px){
        font-size: 23px;
    }

    @media(max-width: 1000px){
        font-size: 20px;
    }
`

export const ProductsList = styled.ul`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 60px;

    @media(max-width: 1170px){
        gap: 50px;
    }

    @media(max-width: 1100px){
        gap: 40px;
    }

    @media(max-width: 930px){
        gap: 30px;
    }
`

export const Li = styled.li`
    width: 110px;

    @media(max-width: 1170px){
        width: 90px;
    }

    @media(max-width: 1100px){
        width: 75px;
    }
`

export const Img = styled.img`
    width: 100%;
`