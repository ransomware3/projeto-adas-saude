import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    height: 200px;
    padding: 0 80px;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    text-align: center;

    @media(max-width: 490px){
        padding: 0 20px;
    }
` 

export const H1 = styled.h1`
    font-size: 25px;
    font-weight: 800;
    color: #1c5c7f;
    line-height: 35px;

    @media(max-width: 1250px){
        font-size: 23px;
    }

    @media(max-width: 1100px){
        font-size: 20px;
    }
`