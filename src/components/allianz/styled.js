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
`

export const LogoImg = styled.img`
    width: 80%;

    @media(max-width: 1000px){
        width: 130px;
    }
`

export const DivLine = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 3px solid #004a93;
    margin-bottom: 120px;
    position: relative;
`

export const DivLogo = styled.div`
    width: 22%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(55%);
    background-color: #fff;

    @media(max-width: 1000px){
        width: 150px;
    }
`

export const HeadingTwo = styled.h2`
    font-weight: 800;
    font-size: 35px;
    margin-bottom: 30px;
    color: #004a93;

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