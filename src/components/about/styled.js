import styled from "styled-components"
import MedTeam from '../../images/med-team.png'

export const DivImage = styled.div`
    width: 100%;
    height: 520px;
    position: relative;
    background-image: url(${MedTeam});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const DivText = styled.div`
    width: 100%;
    height: 520px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(55, 160, 205, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-align: center;
`

export const BannerH1 = styled.h1`
    font-weight: 800;
    font-size: 40px;

    @media(max-width: 1000px){
        font-size: 35px;
    }

    @media(max-width: 485px){
        font-size: 30px;
    }

    @media(max-width: 400px){
        font-size: 25px;
    }
`

export const BannerH3 = styled.h3`
    font-weight: 400;
    font-size: 20px;
    margin-top: 20px;

    @media(max-width: 1000px){
        font-size: 18px;
    }

    @media(max-width: 485px){
        font-size: 14px;
    }
`

export const AlignLimiter = styled.section`
    display: flex;
    justify-content: center;
`

export const SectionLimiter = styled.div`
    width: 75%;
    padding-top: 50px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`

export const P = styled.p`
    font-size: 20px;
    margin-bottom: 30px;

    @media(max-width: 1000px){
        font-size: 18px;
    }

    @media(max-width: 485px){
        font-size: 16px;
    }
`

export const H2 = styled.h2`
    width: 100%;
    font-size: 27px;
    font-weight: 800;
    color: #1c5c7f;
    margin-bottom: 15px;

    @media(max-width: 1000px){
        font-size: 25px;
    }

    @media(max-width: 485px){
        font-size: 23px;
    }
`

export const DivBorder = styled.div`
    border-bottom: 1px solid #37a0cd;
    padding: 40px 0;

    @media(max-width: 1000px){
        text-align: center;
    }
`

export const QualityList = styled.ul`
    width: 80%;
    margin: 50px 0;

    @media(max-width: 730px){
        text-align: center;
        gap: 0;
    }
`

export const LiLeft = styled.li`
    display: flex;
    width: 100%;
    gap: 100px;
    margin-top: 50px;
    align-items: center;

    @media(max-width: 730px){
        text-align: center;
        gap: 0;
    }
`

export const LiRight = styled.li`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    gap: 100px;
    margin-top: 50px;
    text-align: right;
    align-items: center;

    @media(max-width: 730px){
        text-align: center;
        gap: 0;
    }
`

export const QualityImg = styled.img`
    width: 120px;

    @media(max-width: 830px){
        display: none;
    }
`

export const Strong = styled.strong`
    color: #1c5c7f;
`