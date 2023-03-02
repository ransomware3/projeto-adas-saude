import styled from "styled-components"

export const DivContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 50px 0;
    justify-content: space-evenly;
    align-items: center;
    background-color: #edf4fb;
    margin-bottom: 45px;
    color: #222222;

    @media(max-width: 485px){
        flex-direction: column;
        gap: 50px;
    }
`

export const MiniContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Img = styled.img`
    width: 10%;
    margin-bottom: 25px;

    @media(max-width: 1170px){
        width: 40px;
    }
`

export const P = styled.p`
    font-size: 40px;
    font-weight: 800;

    @media(max-width: 1170px){
        font-size: 30px;
    }
`