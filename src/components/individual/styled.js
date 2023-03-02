import styled from "styled-components"
import Family from '../../images/family.jpg'

export const BannerImg = styled.section`
    width: 100%;
    height: 520px;
    position: relative;
    background-image: url(${Family});
    background-size: cover;
    background-position: center -40px;
`

export const BannerText = styled.div`
    width: 100%;
    height: 520px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(28, 92, 127, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
`

export const BannerH1 = styled.h1`
    font-weight: 800;
    font-size: 40px;
`

export const BannerH3 = styled.h3`
    font-weight: 400;
    font-size: 20px;
    margin-top: 20px;
`

export const AlignLimiter = styled.section`
    display: flex;
    justify-content: center;
    background-color: #fafcff;
    padding-bottom: 40px;
`

export const SectionLimiter = styled.div`
    width: 75%;
    padding-top: 60px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`

export const P = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
`

export const Strong = styled.strong`
    color: #1c5c7f;
`