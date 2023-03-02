import styled from "styled-components"

const Footer = () => {
    return(
        <>
            <Div>
                <P>ADAS SAÚDE SEGUROS © 2022 TODOS OS DIREITOS RESERVADOS</P>
            </Div>
        </>
    )
}

const Div = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #edf4fb;
`

const P = styled.p`
    font-size: 13px;

    @media(max-width: 1170px){
        font-size: 10px;
    }
`

export { Footer }