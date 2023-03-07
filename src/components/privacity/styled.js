import styled from "styled-components"

export const AlignLimiter = styled.section`
    display: flex;
    justify-content: center;
    background-color: #fafcff;
    padding-bottom: 40px;
`

export const SectionLimiter = styled.div`
    width: 75%;
    max-width: 1400px;
    padding-top: 60px;
    display: flex;
    flex-flow: column wrap;

    @media(max-width: 1000px){
        text-align: center;
    }
`

export const HeadingTwo = styled.h2`
    font-weight: 800;
    font-size: 25px;
    margin: 30px 0;
    color: #1c5c7f;

    @media(max-width: 1000px){
        font-size: 23px;
    }

    @media(max-width: 485px){
        font-size: 21px;
    }
`

export const HeadingThree = styled.h3`
    font-weight: 800;
    font-size: 20px;
    margin: 20px 0;
    color: #1c5c7f;

    @media(max-width: 1000px){
        font-size: 18px;
    }

    @media(max-width: 485px){
        font-size: 16px;
    }
`

export const P = styled.p`
    font-size: 18px;
    margin-bottom: 30px;

    @media(max-width: 485px){
        font-size: 16px;
    }
`

export const Li = styled.li`
    font-size: 18px;
    margin-bottom: 15px;

    @media(max-width: 485px){
        font-size: 13px;
    }
`

export const Strong = styled.strong`
    color: #1c5c7f;
`

export const Ol = styled.ol`
    list-style-position: inside;
    font-size: 18px;
    margin: 0 0 30px 30px;

    @media(max-width: 1000px){
        margin: 0 0 30px 0;
    }
`

export const Ul = styled.ul`
    list-style-position: inside;
    font-size: 18px;
    margin-left: 30px;

    @media(max-width: 1000px){
        margin: 30px 0;
    }
`

export const Anchor = styled.a`
    color: #37a0cd;
    transition: .2s;
    font-weight: 800;

    &:hover{
        color: #1c5c7f;
    }
`