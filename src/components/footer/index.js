import styled from "styled-components"
import { Link } from "react-router-dom"
import './class-names.css'

const Footer = () => {
    return(
        <>
            <Div>
                <P>ADAS SAÚDE SEGUROS © 2012 TODOS OS DIREITOS RESERVADOS</P>
                <FooterLink className='link' to='/privacidade-e-termos'>Política de Privacidade e Termos de Uso</FooterLink>
            </Div>
        </>
    )
}

const Div = styled.div`
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #edf4fb;
    flex-direction: column;
`

const P = styled.p`
    font-size: 13px;
    margin-bottom: 20px;

    @media(max-width: 1170px){
        font-size: 10px;
    }
`

const FooterLink = styled(Link)`
    font-size: 15px;

    @media(max-width: 1170px){
        font-size: 12px;
    }
`

export { Footer }