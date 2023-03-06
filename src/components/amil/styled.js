import styled from 'styled-components'

export const AlignLimiter = styled.section`
    display: flex;
    justify-content: center;
`

export const SectionLimiter = styled.div`
    width: 75%;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

export const LogoImg = styled.img`
    width: 60%;

    @media(max-width: 1000px){
        width: 100px;
    }
`

export const DivLine = styled.div`
    width: 100%;
    height: 90px;
    border-bottom: 3px solid #461bff;
    margin-bottom: 120px;
    position: relative;
`

export const DivLogo = styled.div`
    width: 20%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(55%);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media(max-width: 1000px){
        width: 120px;
    }
`

export const HeadingTwo = styled.h2`
    font-weight: 800;
    font-size: 35px;
    margin: 30px 0;
    color: #461bff;

    @media(max-width: 1000px){
        font-size: 30px;
    }

    @media(max-width: 485px){
        font-size: 25px;
    }
`

export const P = styled.p`
    font-size: 20px;
    margin-bottom: 30px;

    @media(max-width: 1000px){
        font-size: 16px;
    }
`